(function () {
  angular.module('motosBR').controller('DashboardCtrl', [
    '$http',
    DashboardController
  ])

  // function DashboardController($http) {
  //   const vm = this
  //   vm.get = function () {
  //     const url = 'http://localhost:3003/api/pagamentoSummary'
  //     $http.get(url).then(function(response){
  //       const {credito = 0, debito = 0} = response.data
  //       vm.credito = credito
  //       vm.debito = debito
  //       vm.total = credito - debito
  //     })
  //   }
  //
  //   vm.getSummary()
  // }
})()
