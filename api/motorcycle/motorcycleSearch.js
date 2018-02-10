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

// /*Search method by name*/
// const searchByName = (req, res, next) => {
//   const name = req.params.name
//   Motorcycle.find({'name' : name }, (err, motorcycle) => {
//     if (err) {
//       return handleError(err)
//     }
//     else {
//       res.json(motorcycle)
//     }
//   })
// }

// /*Search method by brand*/
// const searchByBrand = (req, res, next) => {
//   const brand = req.params.brand
//   Motorcycle.find({'brand' : brand }, (err, motorcycle) => {
//     if (err) {
//       return handleError(err)
//     }
//     else {
//       // res.status(200).json("Oiii");
//       res.json(motorcycle)
//     }
//   })
// }

// /*Search method by cylinder*/
// const searchByCylinder = (req, res, next) => {
//   const cylinder = req.params.cylinder
//   Motorcycle.find({'category' : cylinder }, (err, motorcycle) => {
//     if (err) {
//       return handleError(err)
//     }
//     else {
//       res.json(motorcycle)
//     }
//   })
// }

// /*Search method by style*/
// const searchByStyle = (req, res, next) => {
//   const style = req.params.style
//   Motorcycle.find({'style' : style }, (err, motorcycle) => {
//     if (err) {
//       return handleError(err)
//     }
//     else {
//       res.json(motorcycle)
//     }
//   })
// }

// module.exports = { searchByBrand, searchByCylinder, searchByStyle,
                   // searchByComparison, searchByName, search }
