module.exports =  function (server, motorcycle) {
  server.get('/search-comparison/:n1/:n2', motorcycle.searchByComparison)
  server.get('/search/:option/:param', motorcycle.search)
}
