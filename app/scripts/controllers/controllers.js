(function () {
  'use strict';

	angular.module('pokedex.controllers', [])

  .controller('PokedexController', ['$scope', 'pokemonServices', function($scope, pokemonServices){
    pokemonServices.all().then(function (data) {
      $scope.pokemons = data;
    });
  }])

  .controller('PokemonController', ['$scope', 'pokemonServices', function($scope, pokemonServices){
    $scope.pokemon = {};

    pokemonServices.porNombre('squirtle').then(function (data) {
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