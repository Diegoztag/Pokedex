(function () {
  'use strict';

  var app = angular.module('pokedex', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ]);

    app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .otherwise({
          redirectTo: '/'
        });
    }); 

    app.controller('PokemonController', function(){
      this.pokemon = {
        id: '001',
        nombre: 'Bulbasaur',
        especie: 'Pokémon semilla',
        tipo: ['Planta','Veneno'],
        peso: '5.5kg',
        altura: '50cm',
        habilidades: ['Rayo solar','Clorofila'],
        estadisticas: {
          hp: 45,
          ataque: 49,
          defensa: 49,
          "sp.ataque": 65,
          "sp.defensa": 65,
          velocidad: 45,
          total: 318
        },
        evoluciones: ['Bulbasaur','Ivysaur','Venusaur']
      };
    });

})();

