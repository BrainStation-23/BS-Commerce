'use strict';

angular.module('mean.shopCategory').factory('ShopCategory', [ '$resource',
  function($resource) {
    return $resource('categories/:id',{
      id:'@_id'
    },{
      update: {
        method: 'PUT'
      }
    });
  }
]);
