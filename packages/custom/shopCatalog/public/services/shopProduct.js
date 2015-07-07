'use strict';

angular.module('mean.shopCatalog').factory('ShopProduct', ['$resource',
  function($resource) {
    return $resource('api/products/:id',{
      id:'@_id'
    },{
      update: {
        method: 'PUT'
      }
    });
  }
]);
