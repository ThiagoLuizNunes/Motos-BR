const port = process.env.PORT || 4000
//parser do BODY da requisição
const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')
const queryParser = require('express-query-int')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(process.env.PORT, function () {
  console.log(`Listening on: ${port}`);
})

module.exports = server
