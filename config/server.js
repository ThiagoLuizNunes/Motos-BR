const port = 4000
//parser do BODY da requisição
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function () {
  console.log(`Backend is running on port ${port}.`);
})

module.exports = server
