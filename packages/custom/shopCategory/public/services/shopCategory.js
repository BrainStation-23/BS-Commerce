'use strict';

angular.module('mean.shopCategory').factory('ShopCategory', ['$resource',
  function ($resource) {
    return $resource('api/categories/:id', {
      id: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
