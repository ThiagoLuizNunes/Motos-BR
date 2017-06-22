const restful = require('node-restful')
const mongoose = require('mongoose')

const motosSchema = new mongoose.Schema({
  nome: { type: String, required: [true, 'Informe o nome da moto'] },
  marca: { type: String, required: [true, 'Informe a marca da moto'] },
  ano: { type: Number, min: 0, max: 2020 required: [true, 'Informe o ano da moto'] }
})

module.exports = restful.model('Motos_Schema', motosSchema)
