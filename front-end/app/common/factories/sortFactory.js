(function() {
  angular.module('motorcycleBR').factory('sort', [ function() {

    function Data(data) {
      data.sort(function(a, b){
        let nameA = a.name.toLowerCase()
        let nameB = b.name.toLowerCase()

        if(nameA < nameB) {return -1}
        if(nameA > nameB) {return 1}
        return 0
      })
      return data
    }
    return { Data }
  }])
})()
