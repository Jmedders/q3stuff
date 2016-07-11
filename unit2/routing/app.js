var app = angular.module("routingApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
      .when('/:anything*', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
});
