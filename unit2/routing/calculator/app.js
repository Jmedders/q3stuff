var app = angular.module('calcApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/add/:someNum/:num2', {
      templateUrl: 'partials/add.html',
      controller: 'calcController'
    })
    .when('/subtract/:someNum/:num2', {
      templateUrl: 'partials/subtract.html',
      controller: 'calcController'
    })
    .when('/multiply/:someNum/:num2', {
      templateUrl: 'partials/multiply.html',
      controller: 'calcController'
    })
    .when('/divide/:someNum/:num2', {
      templateUrl: 'partials/divide.html',
      controller: 'calcController'
    })
})
