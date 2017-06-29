(function () {
  angular.module('motorcycleBR').controller('MotorcycleCtrl', [
    '$http',
    MotorcycleController
  ])

  function MotorcycleController($http) {
    const vm = this

    /*Post Method*/
    vm.create = function () {
      const url = 'http://localhost:4000/api/motorcycle/'
      $http.post(url, vm.motorcycles).then(function (response) {
        vm.motorcycles = {}
        console.log('Success');
      }).catch(function (response) {
        alert('Error to send POST!')
      })
    }

    /**/
  }
})()
