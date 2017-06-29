(function () {
  angular.module('motorcycleBR').controller('MotorcycleCtrl', [
    '$http',
    'msgs',
    'sort',
    MotorcycleController
  ])

  function MotorcycleController($http, msgs, sort) {
    const vm = this
    const url = 'http://localhost:4000/api/motorcycle/'
    //Heroku url
    // const url = 'https://motosbr.herokuapp.com/api/motorcycle/'

    /*Get Method and Refresh*/
    vm.refresh = function () {
      $http.get(url).then(function (response) {
        vm.motorcycle = {}
        //Array coming from response
        vm.motorcycles = sort.Data(response.data)
      })
    }
    /*Post Method*/
    vm.create = function () {
      $http.post(url, vm.motorcycle).then(function (response) {
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function (response) {
        msgs.addError(response.data.errors)
      })
    }

    vm.refresh()
  }
})()
