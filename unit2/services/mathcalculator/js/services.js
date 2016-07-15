app.factory('mathCalcService', function(){

  return {
    addCalc: function(first, second){
      return (parseInt(first) + parseInt(second));
    },
    subtractCalc: function(first, second){
      return parseInt(first) - parseInt(second);
    },
    multiplyCalc: function(first, second){
      return parseInt(first) * parseInt(second);
    },
    divideCalc: function(first, second){
      return parseInt(first) / parseInt(second);
    },
    powerCalc: function(first, second){
      return Math.pow(parseInt(first), parseInt(second));
    }
  }
});
