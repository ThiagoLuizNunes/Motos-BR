const Motorcycle = require('./motorcycle')

//Cria API REST, ou seja, adiciona CRUD ao SCHEMA do mongo
Motorcycle.methods(['get', 'post', 'put', 'delete'])
//Retorna objeto novo em PUT/POST
Motorcycle.updateOptions({new: true, runValidators: true})
//Adicionando rota, retornar quantidade de registros na collection
Motorcycle.route('count', function (req, res, next) {
  //Método count MongDB
  Motorcycle.count(function (error, value) {
    if (error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})
module.exports = Motorcycle
