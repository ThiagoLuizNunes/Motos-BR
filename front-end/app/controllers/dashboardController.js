(function () {
  angular.module('motorcycleBR').controller('DashboardCtrl', [
    '$http',
    DashboardController
  ])

  function DashboardController($http) {
    const vm = this
    vm.getTotalMotorcycle = function () {
      const url = `http://motosbr.herokuapp/api/motorcycle/count`

      $http.get(url).then(function(response){
        vm.count = response.data.value
      })
    }

    vm.getTotalMotorcycle()
  }
})()
