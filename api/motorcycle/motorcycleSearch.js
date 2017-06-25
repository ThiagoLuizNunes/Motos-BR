const Motorcycle = require('./motorcycle')

/*Search method by brand*/
const searchByBrand = (req, res, next) => {
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

/*Search method by */
module.exports = { searchByBrand }
