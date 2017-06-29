const restful = require('node-restful')
const mongoose = require('mongoose')

const motorcycleSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Informe o nome!'] },
  brand: { type: String, required: [true, 'Informe a marca'],
    enum: ['honda', 'yamaha', 'suzuki'] },
  cylinder: { type: Number, min: 0, required : [true, 'Informa a cilindrada'] },
  style: { type: String, required : [true, 'Informe o estilo'] },
  potency: { type: Number, min: 0, required : [true, 'Informe a pontência' ]},
  torque: { type: Number, min: 0, required : [true, 'Informe o torque' ]},
  seat: { type: Number, min: 0, required : [true, 'Informe o assento' ]},
  weight: { type: Number, min: 0, required : [true, 'Informe o peso' ]},
  tank: { type: Number, min: 0, required : [true, 'Informe o tanque' ]}
})

module.exports = restful.model('motorcycle_schema', motorcycleSchema)
