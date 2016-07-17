app.controller('promiseController', function($scope, promiseService){
  $scope.view = {};
  $scope.view.lookPromise = function(){
    console.log('hi there');
    promiseService.catchEm($scope.view)
    // console.log($scope.view.promiseboy);
    // console.log(pokeName);
  }
  console.log('anything');
})
