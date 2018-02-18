const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')
const nodemailer = require('nodemailer')
const path = require('path')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,12})/

const sendErrorsFromDB = (res, dbErrors) => {
  const errors = []
  _.forIn(dbErrors.errors, error => errors.push(error.message))
  return res.status(400).json({errors})
}

/*Login Method*/
const login = (req, res, next) => {
  const email = req.body.email || ''
  const password = req.body.password || ''
  User.findOne({email}, (err, user) => {
    if(err) {
      return sendErrorsFromDB(res, err)
    } 
    else if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(user, env.authSecret, {
        expiresIn: "1 day"
      })
      const { name, email } = user
      res.json({ name, email, token })
    } 
    else {
      return res.status(400).send({errors: ['Usuário/Senha inválidos']})
    }
  })
}

/*Validte Method*/
const validateToken = (req, res, next) => {
  const token = req.body.token || ''
  jwt.verify(token, env.authSecret, function(err, decoded) {
    return res.status(200).send({valid: !err})
  })
}

/*Register Method*/
const signup = (req, res, next) => {
  const name = req.body.name || ''
  const email = req.body.email || ''
  const password = req.body.password || ''
  const confirmPassword = req.body.confirm_password || ''
  const keyAdmin = req.body.key || ''

  if(!email.match(emailRegex)) {
    return res.status(400).send({errors: ['Email invalid!']})
  }

  if(!password.match(passwordRegex)) {
    return res.status(400).send({errors: [
      "Password must have: a capital letter, a lowercase letter, a number, a special character (@ # $%) and size between 6-12."
      ]})
  }

  const salt = bcrypt.genSaltSync()
  const passwordHash = bcrypt.hashSync(password, salt)
  
  if(!bcrypt.compareSync(confirmPassword, passwordHash)) {
    return res.status(400).send({errors: ['Passwords do not match.']})
  }

  const keyHash = bcrypt.hashSync(keyAdmin, salt)
  if(!bcrypt.compareSync(env.keyAdmin, keyHash)) {
    return res.status(400).send({errors: ['Incorrect key.']})
  }

  User.findOne({email}, (err, user) => {
    if(err) {
      return sendErrorsFromDB(res, err)
    } 
    else if (user) {
      return res.status(400).send({errors: ['User already registered!']})
    } 
    else {
      const newUser = new User({ name, email, password: passwordHash })
      newUser.save(err => {
        if(err) {
          return sendErrorsFromDB(res, err)
        } 
        else {
          login(req, res, next)
        }
      })
    }
  })
}

const forgotPassword = (req, res, next) => {
  const email = req.body.email || ''
  if(!email.match(emailRegex)) {
    return res.status(400).send({errors: ['Email invalid!']})
  }

  User.findOne({email}, (err, user) => {
    if (err) {
      return sendErrorsFromDB(res, err)
    } 
    else if (user) {
      const token = jwt.sign(user, env.authSecret, {
        expiresIn: "5 minute"
      })
      user.resetPasswordToken = token
      user.save((err, update) => {
        if (err) {
          return handleError(error)
        } 
        else {
          res.status(200).send('Token updated')
          sendEmail(req, email, token)
        }
      })
    }
    else {
      return res.status(400).send({errors: ['Email not found']})
    }
  })
}

const sendEmail = (req, email, token) => {
  let transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: env.admin_email,
      pass: env.admin_password
    }
  })

  let emailToSend = {
    from: env.admin_email,
    to: email,
    subject: 'Reset password',
    html: `
    You are receiving this because you (or someone else) have requested the reset of the password for your account.
    Please click on the following link, or paste this into your browser to complete the process:
    <a href="http://${req.headers.host}/resetPassword/${token}">link to reset</a>
    If you did not request this, please ignore this email and your password will remain unchanged.
    `
  }

  transport.sendMail(emailToSend, (err, info) => {
    if (err) {
      return res.status(400).send(err)
    } 
    else {
      return res.status(200).send({message: 'Email sent with success', info: info})
    }
  })
}

const resetPassword = (req, res, next) => {
  const token = req.params.token || ''

  jwt.verify(token, env.authSecret, function(err, decoded) {
    if (err) {
      return res.status(400).send(err)
    } 
    else {
      findToken(req, res, token)
    }
  })
}

const findToken = (req, res, token) => {
  User.findOne({ resetPasswordToken: token }, (err, user) => {
    if (err) {
      return sendErrorsFromDB(res, err)
    }
    else if (user) {
      res.sendFile(path.join(__dirname, '/reset.html'))
      // res.sendFile(path.join(__dirname, '../../public/reset.html'))
    }
    else {
      res.status(400).send('Token invalid!')
    }
  })
}
const confirmPassword = (req, res, next) => {
  const password = req.body.password
  
}

module.exports = { login, signup, validateToken, forgotPassword, resetPassword }
