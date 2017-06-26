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
module.exports = { searchByBrand, searchByCylinder, searchByStyle }
