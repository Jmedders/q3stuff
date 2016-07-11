app.controller('bioController', function($scope){
  $scope.view = {};
  $scope.view.message = "Hi this is bio";
  $scope.view.mytitles = "Biography";
  $scope.view.titles = "Projects";
  $scope.view.titles2 = "Resume";
  $scope.view.urls = "#/projects";
  $scope.view.urls2 = "#/resume";
})
app.controller('projectsController', function($scope){
  $scope.view = {};
  $scope.view.message = "Hi this is projects";
  $scope.view.mytitles = "Projects";
  $scope.view.titles = "Biography";
  $scope.view.titles2 = "Resume";
  $scope.view.urls = "#/";
  $scope.view.urls2 = "#/resume";
})
app.controller('resumeController', function($scope){
  $scope.view = {};
  $scope.view.message = "Hi this is resume"
  $scope.view.mytitles = "Resume";
  $scope.view.titles = "Biography";
  $scope.view.titles2 = "Projects";
  $scope.view.urls = "#/";
  $scope.view.urls2 = "#/projects";
})
