var app = angular.module('yoyoDirectiveApp', []);

app.controller('YoyoController', ['$scope', function($scope) {
  $scope.view = {}
  $scope.view.yoyos = [{
    name: 'Duncan Metal Drifter',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  },
  {
    name: 'Bad ass yo-yo',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  },
  {
    name: 'Sick tight cradle rock',
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  }]
}]);
app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: 'partials/yoyo-details.html'
  };
});
