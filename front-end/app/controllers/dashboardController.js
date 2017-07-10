(function () {
  angular.module('motorcycleBR').controller('DashboardCtrl', [
    '$http',
    'consts',
    DashboardController
  ])

  function DashboardController($http, consts) {
    const vm = this
    vm.getTotalMotorcycle = function () {
      const url = `${consts.apiUrl}/motorcycle/count`

      $http.get(url).then(function(response){
        vm.count = response.data.value
      })
      $http.get(`${url}-brands`).then(function(response){
        vm.brands = response.data.value
      })
    }

    vm.getTotalMotorcycle()
  }
})()
