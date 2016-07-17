
app.controller('serverController', function($scope, $http){
  $http.get('https://still-tundra-8387.herokuapp.com/messages').then(function(data){
    $scope.view = {};
    $scope.view.newdata = data['data'];
    $scope.view.idcount = 63;

    $scope.view.userInput = function(){
      $http.post('https://still-tundra-8387.herokuapp.com/messages', data)
      .success(function (data) {
          $scope.view.newdata.push($scope.newpost);
          $scope.newpost.id = $scope.view.idcount+1;
      })
      .error(function (data) {
        console.log(data);
      });
    }
    $scope.clear = function(){
      $scope.newpost = null;
    };
  });
});
