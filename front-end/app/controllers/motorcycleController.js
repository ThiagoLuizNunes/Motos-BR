(function () {
  angular.module('motorcycleBR').controller('MotorcycleCtrl', [
    '$http',
    'msgs',
    MotorcycleController
  ])

  function MotorcycleController($http, msgs) {
    const vm = this

    /*Post Method*/
    vm.create = function () {
      const url = 'http://localhost:4000/api/motorcycle/'
      $http.post(url, vm.motorcycles).then(function (response) {
        vm.motorcycles = {}
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function (response) {
        msgs.addError(response.data.errors)
      })
    }

    /**/
  }
})()
