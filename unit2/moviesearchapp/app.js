var app = angular.module('movieSearchApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/search.html',
      controller: 'searchController'
    })
    .when('/:imdbIDlink', {
      templateUrl: 'partials/specificResult.html',
      controller: 'resultController'
    })
})
