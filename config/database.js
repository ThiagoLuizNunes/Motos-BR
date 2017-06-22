//Conexão MongoDB e mapeamento dos objetos
const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://motos_br:ti1606@ds139428.mlab.com:39428/db_motos')
