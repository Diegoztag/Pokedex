(function () {
  'use strict';

	angular.module('pokedex.controllers', [])

  .controller('PokemonController', function(){
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
        'sp.ataque': 65,
        'sp.defensa': 65,
        velocidad: 45,
        total: 318
      },
      evoluciones: ['Bulbasaur','Ivysaur','Venusaur']
    };
  })

  .controller('TabsController', function(){
    this.tab = 1;

    this.selectTab = function (tab) {
      this.tab = tab;
    };
  });

  
})();