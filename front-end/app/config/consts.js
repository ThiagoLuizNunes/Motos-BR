(function() {
  angular.module('motorcycleBR').constant('consts', {
    appName: 'Motorcycle BR',
    version: '1.0',
    owner: 'Thiago Luiz',
    year: '2017',
    site: 'https://github.com/ThiagoLuizNunes',
    // apiUrl: 'http://localhost:4000/api',
    // oapiUrl: 'http://localhost:4000',
    apiUrl: 'https://motosbr.herokuapp.com/api',
    oapiUrl: 'https://motosbr.herokuapp.com',
    userKey: '_motorcycle_app_user'
  }).run(['$rootScope', 'consts', function($rootScope, consts) {
    $rootScope.consts = consts
  }])
})()
