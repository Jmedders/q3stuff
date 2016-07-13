app.controller('searchController', function($scope, $rootScope, $http, $routeParams){
  $scope.view = {};
  if($rootScope.roots){
    $http.get('http://www.omdbapi.com/?s=' + $rootScope.roots.searchingOMDB).then(function(data){
      $scope.view.searchresult = data['data']['Search'];
    });
    $scope.view.searching = function(){
      $http.get('http://www.omdbapi.com/?s=' + $scope.view.searchOMDB).then(function(data){
          $scope.view.searchresult = data['data']['Search'];
      });
    }
  } else if($scope.view){
    // no rootscope
    $scope.view.searching = function(){
      console.log('hi im searching');
      console.log('regularscope: ', $scope.view.searchOMDB);
      $http.get('http://www.omdbapi.com/?s=' + $scope.view.searchOMDB).then(function(data){
        $scope.view.searchresult = data['data']['Search'];
      });
    }
  }
})
app.controller('resultController', function($scope, $rootScope, $http, $routeParams, $location){
  $scope.view = {};
  $rootScope.roots = {};
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.imdbIDlink).then(function(data){
    $scope.view.titleInfo = data['data']['Title'];
    $scope.view.year = data['data']['Year'];
    $scope.view.poster = data['data']['Poster'];
    $scope.view.actors = data['data']['Actors'];
    $scope.view.director = data['data']['Director'];
  });
  $scope.view.go = function (path) {
    $location.path(path);
  };
  $rootScope.roots.searches = function(){
    $rootScope.roots.searchingOMDB;
  };
})
