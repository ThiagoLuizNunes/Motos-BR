const regex = require('./regex');
require('./dependencies');

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
      const token = jwt.sign(user, env.passwordSecret, {
        expiresIn: "1 hour"
      })
      user.resetPasswordToken = token

      user.save((err, update) => {
        if (err) {
          return handleError(error)
        } 
        else {
          res.status(200).send('Token updated')
        }
      })

      let transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: env.admin_email,
          pass: env.admin_password
        }
      })

      const resetToken = jwt.sign(user, env.passwordSecret, {
        expiresIn: "1 hour"
      })

      let emailToSend = {
        from: env.admin_email,
        to: email,
        subject: 'Reset password',
        html: `
        You are receiving this because you (or someone else) have requested the reset of the password for your account.
        Please click on the following link, or paste this into your browser to complete the process:
        http://${req.headers.host}
        http://localhost:3000/#!/auth
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
    else {
      return res.status(400).send({errors: ['Email not found']})
    }
  })
}

const resetPassword = (req, res, next) => {
  const token = req.body.token || ''

  jwt.verify(token, env.passwordSecret, function(err, decoded) {
    return res.status(200).send({valid: !err})
  })

  res.json('Olá')
}

module.exports = { forgotPassword, resetPassword }