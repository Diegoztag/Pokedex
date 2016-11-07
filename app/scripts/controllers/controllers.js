(function () {
  'use strict';

	angular.module('pokedex.controllers', [])

  .controller('PokedexController', ['$scope', '$routeParams', 'pokemonServices', function($scope, $routeParams, pokemonServices){
    var tipo = $routeParams.tipo;

    if (tipo) {
      pokemonServices.porTipo(tipo).then(function (data) {
        $scope.pokemons = data;
      });
    } else {
      pokemonServices.all().then(function (data) {
        $scope.pokemons = data;
      });
    }
  }])

  .controller('PokemonController', ['$scope', '$routeParams', 'pokemonServices', function($scope, $routeParams, pokemonServices){
    var name = $routeParams.nombre;
    $scope.pokemon = {};

    pokemonServices.porNombre(name).then(function (data) {
        $scope.pokemon = data;
      });
  }])

  .controller('TabsController', function(){
    this.tab = 1;

    this.selectTab = function (tab) {
      this.tab = tab;
    };
  });


})();