app.controller('pokemonController', function($scope, $http) {
  $scope.view = {};

  $scope.view.pokemon = $http.get('http://pokeapi.co/api/v2/pokedex/2').then(function(data){
    // console.log(random);
    var responseinfo = data['data']['pokemon_entries'];
    pokedata = [];
    for (var i = 0; i < responseinfo.length; i++) {
        pokedata.push(responseinfo[i]['pokemon_species']['name']);
    }
    return pokedata
  }).then(function(data){
    pokemon5 = [];
    for (var i = 0; i < 5; i++) {
      var random = Math.floor(Math.random()*152);
      pokemon5.push(data[random]);
    }
    return pokemon5
  }).then(function(data){
    $scope.view.pokemonsarr = [];
    for (var i = 0; i < data.length; i++) {
      $http.get('http://pokeapi.co/api/v2/pokemon/' + data[i]).then(function(data){
        $scope.view.pokemonsarr.push(data['data']);
      })
    }

  })
})
