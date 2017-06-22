const port = 4000
//parser do BODY da requisição
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(process.env.PORT || 4000, function () {
  console.log('Listening on');
})

module.exports = server

// "dev": "nodemon loader.js",
// "production": "pm2 start loader.js --name backend_motos"
