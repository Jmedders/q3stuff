var app = angular.module('directivesApp', []);

function directiveController($scope){
  $scope.array = {
    numbers: [1,1,2,3,4,5,6],
    suits: ['Spades', 'Diamonds', 'Hearts', 'Clubs'],
    isBig: false
  }
}
app.controller("directiveController", directiveController)
