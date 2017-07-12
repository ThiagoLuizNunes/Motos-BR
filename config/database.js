//Conexão MongoDB e mapeamento dos objetos
const mongoose = require('mongoose')
// module.exports = mongoose.connect('mongodb://motos_br:ti1606@ds139428.mlab.com:39428/db_motos',{useMongoClient: true})
module.exports = mongoose.connect('mongodb://localhost:27017/motos_db',{useMongoClient: true})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'. "
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'. "
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'."
