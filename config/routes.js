const express = require('express')
// const auth = require('./auth')
const MotorcycleSearch = require('../api/motorcycle/motorcycleSearch')

module.exports = function (server) {

  /*
  * Rotas API abertas
  */
  const openApi = express.Router()
  server.use('/', openApi)
  server.get('/search-brand/:brand', MotorcycleSearch.searchForBrand)
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
