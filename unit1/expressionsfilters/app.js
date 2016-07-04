var app = angular.module('madlibsapp', []);

function madLibController($scope){
  $scope.madlib = {
    boyname: "",
    adjective: "",
    pnoun1: "",
    pnoun2: "",
    insect: "",
    pnoun3: "",
    verb: "",
    isTrue: false,
  }
}
app.controller("madLibController", madLibController)
