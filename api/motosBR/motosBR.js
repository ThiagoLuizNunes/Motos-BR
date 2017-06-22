const restful = require('node-restful')
const mongoose = require('mongoose')

const motosSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  marca: { type: String, required: true },
  ano: { type: Number, min: 0, required: true }
})

module.exports = restful.model('Motos_Schema', motosSchema)
