(function () {
  'use strict';

  angular.module('pokedex.services', [])

    .factory('pokemonServices', ['$http', '$q', '$filter', function($http, $q, $filter){
      var normalize = $filter('normalize');

      function all() {
        var deferred = $q.defer();

        $http.get('../pokemons.json')
          .success(function (data) {
            deferred.resolve(data);
          });

      return deferred.promise;
    }

    function porNombre(nombre) {
      nombre = normalize(nombre);
      var deferred = $q.defer();

      all().then(function (data) {
        var resultados = data.filter(function(pokemon) {
          return normalize(pokemon.nombre) === nombre;
        });

        if (resultados.length > 0) {
          deferred.resolve(resultados[0]);
        } else {
          deferred.reject();
        }

      });

      return deferred.promise;
    }

    function porTipo (tipo) {
      tipo = normalize(tipo);
      var deferred = $q.defer();

      all().then(function (data) {
        var resultados = data.filter(function (pokemon) {
          return pokemon.tipo.some(function (t) {
            return normalize(t) === tipo;
          });
        });
        deferred.resolve(resultados);
      });

      return deferred.promise;
    }

    return {
      all: all,
      porNombre: porNombre,
      porTipo: porTipo
    };

  }]);

})();