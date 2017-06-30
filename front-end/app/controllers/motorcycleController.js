(function () {
  angular.module('motorcycleBR').controller('MotorcycleCtrl', [
    '$http',
    'msgs',
    'sort',
    'tabs',
    MotorcycleController
  ])

  function MotorcycleController($http, msgs, sort, tabs) {
    const vm = this
    const url = 'http://localhost:4000/api/motorcycle'
    //Heroku url
    // const url = 'https://motosbr.herokuapp.com/api/motorcycle'

    /*Get Method and Refresh*/
    vm.refresh = function () {
      $http.get(url).then(function (response) {
        vm.motorcycle = {}
        vm.motorcycles = sort.Data(response.data)
        tabs.show(vm,  {tabList: true, tabCreate: true})
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

    /*Update Method*/
    vm.update = function () {
      const updateUrl = `${url}/${vm.motorcycle._id}`
      $http.put(updateUrl, vm.motorcycle).then(function (response) {
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function (response) {
        msgs.addError(response.data.errors)
      })
    }

    /*Delete Method*/
    vm.delete = function () {
      const deleteUrl = `${url}/${vm.motorcycle._id}`
      $http.delete(deleteUrl, vm.motorcycle).then(function (response) {
        vm.refresh()
        msgs.addSuccess('Operação realizada com sucesso!')
      }).catch(function (response) {
        msgs.addError(response.data.errors)
      })
    }

    vm.showTabUpdate = function (motorcycle) {
      vm.motorcycle = motorcycle
      tabs.show(vm, {tabUpdate: true})
    }
    vm.showTabDelete = function (motorcycle) {
      vm.motorcycle = motorcycle
      tabs.show(vm, {tabDelete: true})
    }

    vm.refresh()
  }
})()
