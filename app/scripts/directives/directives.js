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

  .directive('pokemonTipo', function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/pokemon-tipo.html'
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

  .directive('pokemonComentarios', ['pokemonServices', function(pokemonServices){
    return {
      restrict: 'E',
      templateUrl: 'partials/pokemon-comentarios.html',
      scope: {
          nombre: '@nombre'
      },
      link: function (scope, element, attributes) {
        attributes.$observe('nombre', function (value) {
          if (value) {
            scope.nombre = value;
            scope.comentarios = pokemonServices.obtenerComentarios(value);
          }
        });
      },
      controller: function ($scope) {
        $scope.comentarios = pokemonServices.obtenerComentarios($scope.nombre);
        $scope.comentario = {};
        $scope.show = false;

        $scope.toggle = function () {
          $scope.show = !$scope.show;
        };

        $scope.anonimoCambio = function () {
          if ($scope.comentario.anonimo) {
            $scope.comentario.email = '';
          }
        };

        $scope.agregarcoment = function () {
          $scope.comentario.fecha = Date.now();
          pokemonServices.guardarComentario($scope.nombre, $scope.comentario);
          $scope.comentarios = pokemonServices.obtenerComentarios($scope.nombre);
          $scope.comentario = {};
        };
      }
    };
  }]);

})();