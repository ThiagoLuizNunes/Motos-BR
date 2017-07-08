const restful = require('node-restful')
const mongoose = require('mongoose')

const motorcycleSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Informe o nome'] },
  brand: { type: String, required: [true, 'Informe a marca'] },
  category: { type: Number, required: [true, 'Informe a categoria'] },
  style: { type: String, required : [true, 'Informe o estilo'] },
  model: { type: String, required : [true, 'Informa o modelo'] },
  engine: { type: String, required : [true, 'Informa o motor'] },
  cylinder: { type: Number, min: 0, required : [true, 'Informe quantidade de cilindros' ]},
  stroke: { type: String, required : [true, 'Informe quantidade de tempos'] },
  cooled: { type: String, required : [true, 'Informe a refrigeração'] },
  capacity: { type: Number, required : [true, 'Informe as cilindradas'] },
  maxpower: { type: String, required: [true, 'Informe max power'] },
  mintorque: { type: String, required: [true, 'Informe min torque'] },
  transmission: { type: String, required: [true, 'Informe a transmissão'] },
  start: { type: String, required: [true, 'Informe a iginição'] },
  abs: { type: String, required: [true, 'Informe se contém freio ABS'] },
  front: { type: String, required: [true, 'Informe front tire'] },
  rear: { type: String, required: [true, 'Informe rear tire'] },
  seat: { type: Number, min: 0, required : [true, 'Informe o assento' ]},
  weight: { type: Number, min: 0, required : [true, 'Informe o peso' ]},
  tank: { type: Number, min: 0, required : [true, 'Informe o tanque' ]}
})

module.exports = restful.model('motorcycle_schema', motorcycleSchema)
