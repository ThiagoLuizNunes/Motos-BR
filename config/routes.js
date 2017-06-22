const express = require('express')

module.exports = function (server) {

  //API routes
  const router = express.Router()
  server.use('/api', router)

  //rotas da API
  const motosBRService = require('../api/motosBR/motosBRService')
  motosBRService.register(router, '/motosBR')
}
