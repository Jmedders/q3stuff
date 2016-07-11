app.controller('calcController', function($scope, $routeParams){
  $scope.view = {};
  $scope.view.num1 = parseInt($routeParams.someNum);
  x = $scope.view.num1;
  $scope.view.num2 = parseInt($routeParams.num2);
  y = $scope.view.num2
})
