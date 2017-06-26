const express = require('express')
// const auth = require('./auth')
const MotorcycleSearch = require('../api/motorcycle/motorcycleSearch')

module.exports = function (server) {

  /*
  * Rotas API abertas
  */
  const openApi = express.Router()
  server.use('/', openApi)

  server.get('/search-brand/:brand', MotorcycleSearch.searchByBrand)
  server.get('/search-cylinder/:cylinder', MotorcycleSearch.searchByCylinder)
  server.get('/search-style/:style', MotorcycleSearch.searchByStyle)
  server.get('/search-potency/:potency', MotorcycleSearch.searchByPotency)
  server.get('/search-torque/:torque', MotorcycleSearch.searchByTorque)
  server.get('/search-seat/:seat', MotorcycleSearch.searchBySeat)
  server.get('/search-weight/:weight', MotorcycleSearch.searchByWeight)
  server.get('/search-tank/:tank', MotorcycleSearch.searchByTank)
  
  /*
    * Rotas API protegidas
  */
  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  // protectedApi.use(auth)

  //rotas da API
  const motosService = require('../api/motorcycle/motorcycleService')
  motosService.register(protectedApi, '/motorcycle')
}
