(function () {
  angular.module('motorcycleBR').controller('MotorcycleCtrl', [
    '$http',
    '$location',
    'msgs',
    'sort',
    'tabs',
    MotorcycleController
  ])

  function MotorcycleController($http, $location, msgs, sort, tabs) {
    const vm = this
    const url = 'http://localhost:4000/api/motorcycle'
    //Heroku url
    // const url = 'https://motosbr.herokuapp.com/api/motorcycle'
    const searchUrl = 'http://localhost:4000'
    // const searchUrl = 'https://motosbr.herokuapp.com'

    /*Get Method and Refresh*/
    vm.refresh = function () {
      const page = parseInt($location.search().page) || 1

      // $http.get(`${url}?skip=${(page - 1) * 15}&limit=15`).then(function (response) {
      $http.get(`${url}`).then(function (response) {
        vm.motorcycle = {}
        vm.auxMotorcycles = {}

        vm.auxMotorcycles = sort.Data(response.data)
        vm.motorcycles = vm.auxMotorcycles.slice((page - 1) * 15, (page - 1) * 15 + 15)

        //Paginator
        $http.get(`${url}/count`).then(function (response) {
          vm.pages = Math.ceil(response.data.value / 15)
          tabs.show(vm,  {tabList: true, tabCreate: true, tabSearch:true})
        })
      })
    }
    /*Post Method*/
    vm.create = function () {
      $http.get(`${searchUrl}/search-name/${vm.motorcycle.name}`).then(function (response) {
        if (response.data.length == 1) {
          console.log(response);
          msgs.addError('Moto já cadastrada!')
        }
        else {
          $http.post(url, vm.motorcycle).then(function (response) {
            vm.refresh()
            msgs.addSuccess('Operação realizada com sucesso!')
          }).catch(function (response) {
            msgs.addError(response.data.errors)
          })
        }
      }).catch(function (response) {
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

    vm.swapChoice = function (name, brand) {
      vm.nameChoice = name
      vm.brandChoice = brand
    }

    vm.search = function () {
      vm.pages = 0

      if (vm.nameChoice) {
        if (vm.choice != undefined) {
          $http.get(`${searchUrl}/search-name/${vm.choice}`).then(function (response) {
            if (!(response.data.length == 0)) {
              vm.motorcycles = {}
              vm.motorcycles = response.data
              console.log(response.data);
            }
            else {
              vm.refresh()
              msgs.addError('Busca não encontrada')
            }
          }).catch(function (response) {
            vm.refresh()
            msgs.addError(response.data.errors)
          })
        }
        else {
          msgs.addWarning('Campo vazio!')
        }
      }
      else if (vm.brandChoice) {
        if (vm.choice != undefined) {
          $http.get(`${searchUrl}/search-brand/${vm.choice}`).then(function (response) {
            if (!(response.data.length == 0)) {
              vm.motorcycles = {}
              vm.motorcycles = sort.Data(response.data)
              console.log(response.data);
            }
            else {
              vm.refresh()
              msgs.addError('Busca não encontrada')
            }
          }).catch(function (response) {
            vm.refresh()
            msgs.addError('Busca não encontrada')
            // msgs.addError(response.data.errors)
          })
        }
        else {
          msgs.addWarning('Campo vazio!')
        }
      }
      else {
        msgs.addWarning('Selecione uma categoria!')
      }
    }

    vm.refresh()
  }
})()
