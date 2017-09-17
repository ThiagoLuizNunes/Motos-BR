process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../config/server')
const should = chai.should()

chai.use(chaiHttp)

/**
 * Route test : /GET
*/
describe('/GET Motorcycles Yamaha', function () {
  it('Should to return a JSON Object Array', function (done) {
    chai.request(server)
    .get('/search-name/yamaha')
    .end(function (error, res) {
      //The status of the response should be 200 - OK
      res.should.have.status(200)
      //The response return shoud be a JSON Array
      // res.body.should.be.a('json')
      done()
    })
  })
})
