(function () {
  'use strict';

  angular.module('pokedex.services', [])

    .factory('pokemonServices', ['$http', '$q', '$filter', '$window', function($http, $q, $filter, $window){
      var localStorage = $window.localStorage;
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

    function guardarComentario (pokemon, comentario) {
      var comentarios = obtenerComentarios(pokemon);

      comentarios.push(comentario);
      localStorage.setItem(pokemon, JSON.stringify(comentarios));
    }

    function obtenerComentarios (pokemon) {
      var comentarios = localStorage.getItem(pokemon);

      if (!comentarios) {
        comentarios = [];
      } else {
        comentarios = JSON.parse(comentarios);
      }
      return comentarios;
    }

    return {
      all: all,
      porNombre: porNombre,
      porTipo: porTipo,
      guardarComentario: guardarComentario,
      obtenerComentarios: obtenerComentarios
    };

  }]);

})();