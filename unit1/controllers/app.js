var app = angular.module("firstApp", []);

app.controller("myFirstController", function($scope){
  $scope.name = "Severus Snape";
})
app.controller("exercisesController", function($scope){
  $scope.favColor = "teal";
  $scope.secondsInACentury = function(){
    return (60*60*24*365*100)
  }
  $scope.rightNow = function(){
    var today = new Date();
    return today;
  }
})
