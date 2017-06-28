(function () {
  angular.module('motorcycleBR').config([
    //Injeção de dependência
    '$stateProvider',
    '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {
      $stateProvider.state('dashboard', {
        url: "/dashboard",
        templateUrl: "dashboard/dashboard.html"
      }).state('motorcycle', {
        url: "/motorcycle",
        templateUrl: "motorcycle/tabs.html"
      })
    }
  ])
})()
