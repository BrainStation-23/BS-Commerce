(function(){
  'use strict';

  angular.module('mean.shopOrder').factory('Cart', [ '$resource',
    function($resource) {
      return $resource('api/cart', null ,{
        update: {
          method: 'PUT'
        }
      });
    }
  ]);
})();