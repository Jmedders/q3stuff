app.controller("FirstController", function($scope, firstService) {
    $scope.view = {};
    $scope.view.greeting = firstService.sayHi();
    $scope.view.goodbye = firstService.sayGoodbye();
    $scope.view.users = firstService.getAllUsers();
  });
