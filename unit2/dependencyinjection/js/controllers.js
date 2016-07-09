app.controller('FirstController', function($rootScope, $http, $q, $scope){
  var sayHi = function(firstName, lastName, favoriteColor) {
    return `Hi ${firstName} ${lastName}. It looks like your favorite color is ${favoriteColor}`;
    angular.injector().annotate(sayHi)
  }
})
