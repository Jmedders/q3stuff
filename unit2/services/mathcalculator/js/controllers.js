app.controller('MathController', function($scope, mathCalcService){
  $scope.view = {};
  $scope.view.calculateMaths = function(){
    if($scope.view.operator == "Add"){
      $scope.view.solution = mathCalcService.addCalc($scope.view.first, $scope.view.second);
      console.log($scope.view.solution);
    }
    else if($scope.view.operator == "Subtract"){
      $scope.view.solution = mathCalcService.subtractCalc($scope.view.first, $scope.view.second)
    }
    else if($scope.view.operator == "Multiply"){
      $scope.view.solution = mathCalcService.multiplyCalc($scope.view.first, $scope.view.second)
    }
    else if($scope.view.operator == "Divide"){
      $scope.view.solution = mathCalcService.divideCalc($scope.view.first, $scope.view.second)
    }
    else if($scope.view.operator == "Power"){
      $scope.view.solution = mathCalcService.powerCalc($scope.view.first, $scope.view.second)
    }
    else {
      $scope.view.solution = "Invalid"
    }
  }
});
