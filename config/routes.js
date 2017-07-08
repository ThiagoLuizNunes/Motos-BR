const express = require('express')
const auth = require('./auth')
const path = require('path');
const MotorcycleSearch = require('../api/motorcycle/motorcycleSearch')

module.exports = function (server) {

  /*
  * API open routes
  */
  const openApi = express.Router()
  server.use('/', openApi)
  // server.use(express.static(path.join(__dirname, '../front-end/public')));

  //Login/SingUp routes
  const AuthService = require('../api/user/authService')
  openApi.post('/login', AuthService.login)
  openApi.post('/signup', AuthService.signup)
  openApi.post('/validateToken', AuthService.validateToken)

  //Search's routes
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
