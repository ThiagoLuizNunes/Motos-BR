(function () {
  angular.module('motorcycleBR').controller('MotorcycleCtrl', [
    '$http',
    MotorcycleController
  ])

  function MotorcycleController($http) {
    const vm = this

    vm.create = function () {
    }
  }
})()
