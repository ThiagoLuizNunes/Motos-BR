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

    vm.changeMode = () => vm.loginMode = !vm.loginMode

    vm.login = () => {
      auth.login(vm.user, err => err ? msgs.addError(err) : $location.path('admin'))
    }
    vm.signup = () => {
      auth.signup(vm.user, err => err ? msgs.addError(err) : $location.path('admin'))
    }

    vm.forgotPassword = () => {
      $('#myModal').modal('show')
      console.log('Forgot password!')
      // console.log(vm.user.email)
    }

    let btnReset = document.getElementById('btnReset')
    btnReset.onclick = () => {
      console.log('Password reset!')
    }
    
    vm.getUser = () => auth.getUser()

    vm.logout = () => {
      auth.logout(() => $location.path('auth'))
    }
  }
})()
