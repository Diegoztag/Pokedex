(function () {
  'use strict';

  angular.module('pokedex.filters', [])

  .filter('normalize', function () {
    return function (input) {
      input = input
        .replace('♀','f')
        .replace('♂','m')
        .replace(/\W+/g,'');
      return input.toLowerCase();
    };
  })

  .filter('imageify',['$filter', function ($filter) {
    return function (input) {
      var url = 'images/pokemons/' + $filter('normalize')(input) + '.jpg';
      return url;
    };
  }]);

})();