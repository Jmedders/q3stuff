var app = angular.module('portfolioApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'partials/bio.html',
        controller: 'bioController'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'projectsController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'resumeController'
      })
});
