app.controller('toDoController', function($scope, toDoService){
  $scope.view = {};
  $scope.view.addToDo = function(){
    $scope.view.todo = toDoService.addDos($scope.view.inputs)
  }
})
