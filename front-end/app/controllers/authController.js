(function() {
  angular.module('motorcycleBR').controller('AuthCtrl', [
    '$location',
    'msgs',
    'auth',
    AuthController
  ])

  function AuthController($location, msgs, auth) {
    const vm = this

    vm.loginMode = true

    vm.changeLabel = () => vm.loginMode ? vm.forgotPassword() : vm.changeMode()
    vm.changeMode = () => vm.loginMode = !vm.loginMode

    vm.login = () => {
      auth.login(vm.user, err => err ? msgs.addError(err) : $location.path('admin'))
    }
    vm.signup = () => {
      auth.signup(vm.user, err => err ? msgs.addError(err) : $location.path('admin'))
    }

    vm.forgotPassword = () => {
      console.log('Forgot password!')
    }
    vm.getUser = () => auth.getUser()

    vm.logout = () => {
      auth.logout(() => $location.path('auth'))
    }
  }
})()
