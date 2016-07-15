app.controller('promiseController', function($scope, promiseService){
  $scope.view = {};
  $scope.view.lookPromise = function(){
    $scope.view.promiseboy = promiseService.catchEm($scope.view.inputs)
    console.log($scope.view.promiseboy);
  }
})
