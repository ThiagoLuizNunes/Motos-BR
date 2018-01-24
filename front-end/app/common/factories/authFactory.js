(function() {
  angular.module('motorcycleBR').factory('auth', [
    '$http',
    'consts',
    AuthFactory
  ])

  function AuthFactory($http, consts) {

    let user = null
    function getUser() {
      if(!user) {
        user = JSON.parse(localStorage.getItem(consts.userKey))
      }
      return user
    }

    function signup(user, callback) {
      submit('signup', user, callback)
    }

    function login(user, callback) {
      submit('login', user, callback)
    }

    function submit(url, user, callback) {
      $http.post(`${consts.oapiUrl}/${url}`, user)
        .then(response => {
          localStorage.setItem(consts.userKey, JSON.stringify(response.data))
          $http.defaults.headers.common.Authorization = response.data.token
          if (callback) callback(null, response.data)
        }).catch(function (response) {
          if (callback) callback(response.data.errors, null)
        })
    }

    function logout(callback) {
      user = null
      localStorage.removeItem(consts.userKey)
      $http.defaults.headers.common.Authorization = ''
      if (callback) callback(null)
    }

    function validateToken(token, callback) {

      if (token) {
        $http.post(`${consts.oapiUrl}/validateToken`, { token })
          .then(response => {
            if (!response.data.valid) {
            console.log('Erro validate response, logout() is call');
            logout()
            } else {
              $http.defaults.headers.common.Authorization = getUser().token
            }
            if (callback) callback(null, response.data.valid)
          }).catch(function (response) {
              if (callback) callback(response.data.errors)
          })
      } else {
          if (callback) callback('Token inválido.')
      }
    }

    function resetPassword(email, callback) {
      $http.post(`${consts.oapiUrl}/resetPassword`, email)
        .then(response => {
          console.log(response.data)
        }).catch(function (response) {
          if (callback) callback(response.data.errors)
        })
    }
    return { signup, login, logout, getUser, validateToken, resetPassword }
  }
})()
