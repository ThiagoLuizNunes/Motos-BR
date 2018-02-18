(function() {
  angular.module('motorcycleBR').controller('AuthCtrl', [
    '$location',
    'msgs',
    'auth',
    'consts',
    AuthController
  ])

  function AuthController($location, msgs, auth) {
    const vm = this

    vm.loginMode = true
    vm.btnReset = document.getElementById('btnReset')
    vm.input = document.getElementById('email')

    vm.changeMode = () => vm.loginMode = !vm.loginMode

    vm.login = () => {
      auth.login(vm.user, err => err ? msgs.addError(err) : $location.path('admin'))
    }
    
    vm.signup = () => {
      auth.signup(vm.user, err => err ? msgs.addError(err) : $location.path('admin'))
    }

    vm.forgotPassword = () => {
      $('#myModal').modal('show')
    }

    vm.sendEmail = () => {
      if (vm.input.value != '' && vm.input.validity.valid) {
        auth.forgotPassword({email: vm.input.value})
        vm.input.value = ''
      } else {
        msgs.addError('Email address invalid!')
      }
    }
    
    vm.getUser = () => auth.getUser()

    vm.logout = () => {
      auth.logout(() => $location.path('auth'))
    }
  }
})()
