app.controller('searchController', function($scope, $rootScope, $http, $routeParams){
  $scope.view = {};
  if($rootScope.roots){
    // console.log('before search function in root scope', $rootScope.roots.selector);

    // console.log('im in rootscope searching where rootScope: ', $rootScope.roots.searchingOMDB);
    if($rootScope.roots.selector){
      console.log('line 9: ', $rootScope.roots.selector);
      $http.get('http://www.omdbapi.com/?s=' + $rootScope.roots.searchingOMDB + '&type=' + $rootScope.roots.selector).then(function(data){
        $scope.view.searchresult = data['data']['Search'];
      });
    } else{
      $http.get('http://www.omdbapi.com/?s=' + $rootScope.roots.searchingOMDB).then(function(data){
        $scope.view.searchresult = data['data']['Search'];
      });
    }
    $scope.view.searching = function(){

      if($rootScope.roots.selector){
        $rootScope.roots.selector = $scope.view.selector
        console.log('line 20: ',  $rootScope.roots.selector);
        $http.get('http://www.omdbapi.com/?s=' + $scope.view.searchOMDB + '&type=' + $rootScope.roots.selector).then(function(data){
          $scope.view.searchresult = data['data']['Search'];
        });
      } else {
        $http.get('http://www.omdbapi.com/?s=' + $scope.view.searchOMDB).then(function(data){
          $scope.view.searchresult = data['data']['Search'];
        });
      }
    }
  } else if($scope.view){
    // no rootscope
    $scope.view.searching = function(){
      if($scope.view.selector){
        console.log('line 35', $scope.view.selector);
        $http.get('http://www.omdbapi.com/?s=' + $scope.view.searchOMDB + '&type=' + $scope.view.selector).then(function(data){
          $scope.view.searchresult = data['data']['Search'];
        });
      } else{
          $http.get('http://www.omdbapi.com/?s=' + $scope.view.searchOMDB).then(function(data){
            $scope.view.searchresult = data['data']['Search'];
          });
      }
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
    $scope.view.plot = data['data']['Plot'];
  });
  $scope.view.go = function (path) {
    $location.path(path);
  };
  $rootScope.roots.searches = function(){
    $rootScope.roots.searchingOMDB;
    $rootScope.roots.selector = $scope.view.selector;
  };
})
