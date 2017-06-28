(function () {
  angular.module('motorcycleBR').controller('DashboardCtrl', [
    '$http',
    DashboardController
  ])

  function DashboardController($http) {
    const vm = this
    vm.getTotalMotorcycle = function () {
      const url = `https://motosbr.herokuapp.com/api/motorcycle/count`

      $http.get(url).then(function(response){
        vm.count = response.data.value
      })
    }

    vm.getTotalMotorcycle()
  }
})()
