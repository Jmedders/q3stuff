app.directive('parent', function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      this.parentMessage = function(news) {
        console.log('hi ' + news);
      };
    },
  };
});
app.directive('gsChild', function() {
  return {
    restrict: 'E',
    require: '^parent',
    link: function(scope, element, attrs, parentCtrl) {
        parentCtrl.parentMessage('bad kids');
    }
  };
});
