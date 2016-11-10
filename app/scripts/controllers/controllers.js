(function (_) {
  'use strict';

	angular.module('pokedex.controllers', [])

  .controller('PokedexController', ['$scope', '$routeParams', 'pokemonServices', function($scope, $routeParams, pokemonServices){
    var tipo = $routeParams.tipo;

    function partition (data, n) {
      return _.chain(data).groupBy(function (element, index) {
        return Math.floor(index / n);
      }).toArray().value();
    }

    if (tipo) {
      $scope.tipo = tipo;

      pokemonServices.porTipo(tipo).then(function (data) {
        $scope.pokemons = data;
        $scope.groupped = partition(data, 4);
      });
    } else {
      pokemonServices.all().then(function (data) {
        $scope.pokemons = data;
        $scope.groupped = partition(data, 4);
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

})(_);