app.service("promiseService", function($http) {

  var baseUrl = 'http://pokeapi.co/';

  // A number for the pokemon id needs to be added to the
  // this path.
  return {
    this.pokemonName 
    catchEm: function(pokemonId) {
      var pokemonInfoPath = 'api/v1/pokemon/';
      var pokeData;
      var fullUrl = baseUrl + pokemonInfoPath + pokemonId + '/';
      $http.get(fullUrl).then(function(baseData) {
        pokemonName = baseData.data['name'];
      })
    }
  }
});
