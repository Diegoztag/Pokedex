(function () {
  'use strict';

  var app = angular.module('pokedex', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'pokedex.controllers',
      'pokedex.directives',
      'pokedex.filters',
      'pokedex.services'
    ]);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: 'views/pokedex.html',
        controller: 'PokedexController'
      })
      .when('/:tipo', {
        templateUrl: 'views/pokedex.html',
        controller: 'PokedexController'
      })
      .when('/pokemon/:nombre', {
        templateUrl: 'views/pokemon.html',
        controller: 'PokemonController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

})();

