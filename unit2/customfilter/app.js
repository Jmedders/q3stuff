var app = angular.module('customFilterApp', []);

app.filter('kebab', function(){
  return function(input){
    if (typeof input === "number") {
      return input
    }
    else if(typeof input === "string"){
      var letters = input.split('');
      for (var i = 0; i < letters.length; i++) {
        if(letters[i] === "_"){
          letters[i] = "-"
        }
      }
      return letters.join('');
    }
  }
})

app.filter('camelCase', function(){
  return function(input){
    if(typeof input === "number"){
      return input
    } else if (typeof input === "string"){
      var letters = input.split('');
      for (var i = 0; i < letters.length; i++) {
        if(letters[i] === "_" || letters[i] === "-"){
          letters[i] = ""
          letters[i+1] = letters[i+1].toUpperCase();
        }
      }
      return letters.join('')
    }
  }
})

app.filter('reversereverse', function(){
  return function(input){
    return input.split('').reverse().join('').split(" ").reverse().join(' ')
  }
})

app.filter('redactor', function(){
  var arr = [];
  var hello = "hello"
  return function(input, redact){
    var input = input.toLowerCase();
    var redact = redact.toLowerCase();
    var newinput = input.replace(redact, "")
    return newinput
  }
})
