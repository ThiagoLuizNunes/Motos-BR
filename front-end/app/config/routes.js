(function () {
  angular.module('motorcycleBR').config([
    //Injeção de dependência
    '$stateProvider',
    '$urlRouterProvider',
    '$httpProvider',

    function ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider.state('motos', {
        url: "/",
        templateUrl: "template/website/motosbr.html"
      }).state('admin', {
        url: "/admin",
        views: {
          '': {
            templateUrl: 'template/admin/admin.html'
          },
          'view-admin@admin': {
            templateUrl: 'template/admin/dashboard/dashboard.html'
          }
        }
      }).state('dashboard', {
        parent: 'admin',
        views: {
          'view-admin@admin': {
            templateUrl: 'template/admin/dashboard/dashboard.html'
          }
        }
      }).state('motorcycle', {
        parent: 'admin',
        views: {
          'view-admin@admin': {
            templateUrl: 'template/admin/motorcycle/tabs.html'
          }
        }
      }).state('auth', {
        url: "/auth",
        templateUrl: "template/admin/auth/auth.html"
      })

      $urlRouterProvider.otherwise('/');
      // $httpProvider.interceptors.push('handleResponseError')
    }
  ])
  .run([
    '$rootScope',
    '$http',
    '$location',
    '$window',
    '$state',
    'auth',
    function ($rootScope, $http, $location, $window, $state, auth) {
      validateUser()
      $rootScope.$on('$locationChangeStart', () => validateUser())

      function validateUser() {
        const user = auth.getUser()
        const authPage = 'auth'
        const adminPage = 'admin'
        const isAdmin = $window.location.href.includes(adminPage)
        const isAuthPage = $window.location.href.includes(authPage)

        if (!user && isAdmin) {
          console.log('!user e isAdmin, comeback to authPage');
          // $window.location.href = '#!/auth'
          $location.path(authPage)
        }
        if (user && $state.is('auth')) {
          console.log('To em AUTHPAGE');
          // $window.location.href = '#!/admin'
          $location.path(adminPage)
        }
        else if (user && isAuthPage) {
          console.log("OIIIIIi");
          console.log(user.isValid);
          $location.path(adminPage)
        }
        else if (user && !user.isValid) {
            auth.validateToken(user.token, (err, valid) => {
              if (!valid) {
                console.log('Error response, comeback to authPage');
                $location.path(adminPage)
              }
              else {
                user.isValid = true
                $http.defaults.headers.common.Authorization = user.token
                if (isAuthPage) {
                  console.log(`${isAuthPage} ${user.token}`);
                  $location.path(adminPage)
                }
              }
            })
        }
      }
    }
  ])
})()
