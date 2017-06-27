const restful = require('node-restful')
const mongoose = require('mongoose')

const motorcycleSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Report the name of motorcycle'] },
  brand: { type: String, required: [true, 'Report the brand of motorcycle'],
    enum: ['honda', 'yamaha', 'suzuki'] },
  cylinder: { type: Number, min: 0, required : [true, 'Report the cylinder capacity of motorcycle'] },
  style: { type: String, required : [[true, 'Report the style of motorcycle'] ]},
  potency: { type: Number, min: 0, required : [[true, 'Report the potency of motorcycle'] ]},
  torque: { type: Number, min: 0, required : [[true, 'Report the torque of motorcycle'] ]},
  seat: { type: Number, min: 0, required : [[true, 'Report the seat of motorcycle'] ]},
  weight: { type: Number, min: 0, required : [[true, 'Report the weight of motorcycle'] ]},
  tank: { type: Number, min: 0, required : [[true, 'Report the tank of motorcycle'] ]}
})

module.exports = restful.model('motorcycle_schema', motorcycleSchema)
