'use strict';

angular.module('mean.shopThemes').factory('ShopThemes', ['$resource',
  function($resource) {
    return {
      name: 'shopThemes',
      getTheme: function() {
        var getTheme = $resource('/api/theme', {}, {
          'get': {method: 'GET'}
        });
        return getTheme.get();
      }
    };
  }
]);
