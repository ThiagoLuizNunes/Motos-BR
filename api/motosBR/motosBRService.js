const MotosBR = require('./motosBR')

//Cria API REST, ou seja, adiciona CRUD ao SCHEMA do mongo
MotosBR.methods(['get', 'post', 'put', 'delete'])
//Retorna objeto novo em PUT/POST
MotosBR.updateOptions({new: true, runValidators: true})
//Adicionando rota
MotosBR.route('count', function (req, res, next) {
  //Método count MongDB
  MotosBR.count(function (error, value) {
    if (error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})
module.exports = MotosBR
