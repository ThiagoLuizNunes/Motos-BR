const Motorcycle = require('./motorcycle')

const search = (req, res, next) => {
  const option = req.params.option
  const param = req.params.param 
  const obj = {
    [option] : param
  }

  Motorcycle.find( obj, (err, motorcycle) => {
    if (err) {
      return handleError(err)
    }
    else {
      res.json(motorcycle)
    }
  })
}

/*Search method by comparison*/
const searchByComparison = (req, res, next) => {
  const name1 = req.params.n1
  const name2 = req.params.n2
  Motorcycle.find({$or: [{name: name1} , {name: name2}]} , (err, motorcycle) => {
    if (err) {
      return handleError(err)
    }
    else {
      res.json(motorcycle)
    }
  })
}

module.exports = { searchByComparison, search }
