const express = require('express')
// const auth = require('./auth')
const MotorcycleSearch = require('../api/motorcycle/motorcycleSearch')

module.exports = function (server) {

  /*
  * API open routes
  */
  const openApi = express.Router()
  server.use('/', openApi)
  //Search routes
  require('../api/motorcycle/motorcycleRoutes')(server, MotorcycleSearch)

  /*
    * API closed routes
  */
  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  // protectedApi.use(auth)

  //API routes
  const motosService = require('../api/motorcycle/motorcycleService')
  motosService.register(protectedApi, '/motorcycle')
}
