//Conexão MongoDB e mapeamento dos objetos
const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://motos_br:ti1606@ds139428.mlab.com:39428/db_motos')

mongoose.Error.messages.general.required = "O atributo {PATH} é obrigatório."
mongoose.Error.messages.Number.min = "O '{ANO}' informado é menor que o limite mínimo de '{MIN}'. "
mongoose.Error.messages.Number.max = "O '{ANO}' informado é maior que o limite máximo de '{MAX}'. "
