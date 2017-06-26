const Motorcycle = require('./motorcycle')

/*Search method by brand*/
const searchByBrand = (req, res, next) => {
  const brand = req.params.brand
  Motorcycle.find({'brand' : brand }, (err, motorcycle) => {
    if (err) {
      return handleError(err)
    }
    else {
      res.json(motorcycle)
    }
  })
}

/*Search method by cylinder*/
const searchByCylinder = (req, res, next) => {
  const cylinder = req.params.cylinder
  Motorcycle.find({'cylinder' : cylinder }, (err, motorcycle) => {
    if (err) {
      return handleError(err)
    }
    else {
      res.json(motorcycle)
    }
  })
}

/*Search method by style*/
const searchByStyle = (req, res, next) => {
  const style = req.params.style
  Motorcycle.find({'style' : style }, (err, motorcycle) => {
    if (err) {
      return handleError(err)
    }
    else {
      res.json(motorcycle)
    }
  })
}

/*Search method by potency*/
const searchByPotency = (req, res, next) => {
  const potency = req.params.potency
  Motorcycle.find({'potency' : potency }, (err, motorcycle) => {
    if (err) {
      return handleError(err)
    }
    else {
      res.json(motorcycle)
    }
  })
}

/*Search method by torque*/
const searchByTorque = (req, res, next) => {
  const torque = req.params.torque
  Motorcycle.find({'torque' : torque }, (err, motorcycle) => {
    if (err) {
      return handleError(err)
    }
    else {
      res.json(motorcycle)
    }
  })
}

/*Search method by seat*/
const searchBySeat = (req, res, next) => {
  const seat = req.params.seat
  Motorcycle.find({'seat' : seat }, (err, motorcycle) => {
    if (err) {
      return handleError(err)
    }
    else {
      res.json(motorcycle)
    }
  })
}

/*Search method by weight*/
const searchByWeight = (req, res, next) => {
  const weight = req.params.weight
  Motorcycle.find({'weight' : weight }, (err, motorcycle) => {
    if (err) {
      return handleError(err)
    }
    else {
      res.json(motorcycle)
    }
  })
}

/*Search method by tank*/
const searchByTank = (req, res, next) => {
  const tank = req.params.tank
  Motorcycle.find({'tank' : tank }, (err, motorcycle) => {
    if (err) {
      return handleError(err)
    }
    else {
      res.json(motorcycle)
    }
  })
}

module.exports = { searchByBrand, searchByCylinder, searchByStyle, searchByPotency,
                   searchByTorque, searchBySeat, searchByWeight, searchByTank }
