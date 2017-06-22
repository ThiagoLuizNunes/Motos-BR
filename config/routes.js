const express = require('express')

module.exports = function (server) {

  //API routes
  const router = express.Router()
  server.use('/api', router)

  //adicionando rotas da API - CRUD
  const motosBRService = require('../api/motosBR/motosBRService')
  motosBRService.register(router, '/motosbr')
}
