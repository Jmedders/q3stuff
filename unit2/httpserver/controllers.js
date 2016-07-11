
app.controller('serverController', function($scope, $http){
  $http.get('https://still-tundra-8387.herokuapp.com/messages').then(function(data){
    $scope.view = {};
    $scope.view.newdata = data['data'];
    $scope.view.idcount = 64;

    $scope.view.userInput = function(){
      $scope.newpost.id = $scope.view.idcount;
      var config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
      }


      $http.post('https://still-tundra-8387.herokuapp.com/messages', data, config)
      .success(function (data, status, headers, config) {
          $scope.view.newdata.push($scope.newpost);
          $scope.view.idcount = $scope.view.idcount + 1
      })
      .error(function (data, status, header, config) {
          $scope.ResponseDetails = "Data: " + data +
              "<hr />status: " + status +
              "<hr />headers: " + header +
              "<hr />config: " + config;
      });
    }
    $scope.clear = function(){
      $scope.newpost = null;
    };
  });
});
