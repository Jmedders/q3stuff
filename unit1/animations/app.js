var app = angular.module('animationsApp', ['ngAnimate']).controller("MainController", function($scope){
      $scope.view = {};
      $scope.view.instructors = ["Tim", "Ian", "Matt", "Elie"];
    });
