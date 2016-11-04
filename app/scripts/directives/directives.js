(function () {
	'use strict';

  angular.module('pokedex.directives', [])

  .directive('pokemonNombre', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/pokemon-nombre.html'
    };
  })

  .directive('pokemonImagen', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/pokemon-imagen.html'
    };
  })

  .directive('pokemonDatos', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/pokemon-datos.html'
    };
  })

  .directive('pokemonEstadisticas', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/pokemon-estadisticas.html'
    };
  })

  .directive('pokemonEvoluciones', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/pokemon-evoluciones.html'
    };
  })

  .directive('pokemonComentarios', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/pokemon-comentarios.html',
      controller: function () {
        this.comentarios = [];
        this.commentario = {};
        this.show = false;

        this.toggle = function () {
          this.show = !this.show;
        };

        this.anonimoCambio = function () {
          if (this.comentario.anonimo) {
            this.comentario.email = '';
          }
        };

        this.agregarcoment = function () {
          this.comentario.fecha = Date.now();
          this.comentarios.push(this.comentario);
          this.comentario = {};
        };
      },
      controllerAs: 'cmtsCtrl'
    };
  });

})();