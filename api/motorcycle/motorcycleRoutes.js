module.exports =  function (server, motorcycle) {
  server.get('/search-name/:name', motorcycle.searchByName)
  server.get('/search-brand/:brand', motorcycle.searchByBrand)
  server.get('/search-cylinder/:cylinder', motorcycle.searchByCylinder)
  server.get('/search-style/:style', motorcycle.searchByStyle)
  server.get('/search-potency/:potency', motorcycle.searchByPotency)
  server.get('/search-torque/:torque', motorcycle.searchByTorque)
  server.get('/search-seat/:seat', motorcycle.searchBySeat)
  server.get('/search-weight/:weight', motorcycle.searchByWeight)
  server.get('/search-tank/:tank', motorcycle.searchByTank)
  server.get('/search-comparison/:n1/:n2', motorcycle.searchByComparison)
}
