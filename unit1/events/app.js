var app = angular.module('eventApp', [])

function eventController($scope){
    $scope.view = {};
    $scope.view.number = 5;
    $scope.view.pickRandomNumber = function(){
      $scope.view.number = Math.floor(Math.random() * 10) + 1;
    }
  }
app.controller('eventsController', function($scope){
  $scope.events = {};
  $scope.events.reverser = function(){
    $scope.events.texts = $scope.events.texts.split("").reverse().join("")
  }
})
app.controller('pingPongController', function($scope){
  $scope.pongs = {};
  $scope.pongs.count = 0;
  $scope.pongs.counts = 0;
})
app.controller("eventController", eventController)
