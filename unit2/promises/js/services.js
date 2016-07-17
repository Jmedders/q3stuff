app.service("promiseService", function($http) {

  var baseUrl = 'http://pokeapi.co/';

  // A number for the pokemon id needs to be added to the
  // this path.
  return {
    catchEm: function(view) {
      console.log(view.inputs);
      var pokemonId = view.inputs
      var pokemonInfoPath = 'api/v1/pokemon/';
      var pokeData;
      var fullUrl = baseUrl + pokemonInfoPath + pokemonId + '/';
      $http.get(fullUrl).then(function(data) {
        pokemonName = data.data['name'];
        console.log(pokemonName);
        view.promiseboy = pokemonName;
      });
      return 'junk'
    }
  }
});
