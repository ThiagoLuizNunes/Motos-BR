const Motorcycle = require('./motorcycle')

const searchForBrand = (req, res, next) => {

  const brand = req.params.brand
  Motorcycle.find({'brand' : brand } , (err, motorcycle) => {
    if (err) {
      console.log('ERROR');
      return handleError(err)
    }
    else {
      res.json(motorcycle)
    }
  })
}

module.exports = { searchForBrand }
