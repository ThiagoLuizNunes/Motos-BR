const express = require('express')
const path = require('path');
const MotorcycleSearch = require('../api/motorcycle/motorcycleSearch')

module.exports = function (server) {

  /*
  * API open routes
  */
  const openApi = express.Router()
  server.use('/', openApi)
  // server.use(express.static(path.join(__dirname, '../front-end/public')));
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
