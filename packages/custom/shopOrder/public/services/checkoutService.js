(function(_){
  'use strict';

  angular.module('mean.shopOrder').factory('checkoutService', ['$rootScope','Global', 'Cart', '$resource',
    function($rootScope, Global, Cart, $resource) {
      var cart = Cart.get();
      return {
        getCart: function(){
          return cart;
        },
        getUserById: function(userId) {
            var userById = $resource('/auth/user/:userId', {userId:'@userId'});
            return userById.get({userId: userId});
        },
        createOrder: function(order) {
          var addOrder = $resource('/api/auth/order', {}, {
            'create': {method: 'POST'}
          });
          return addOrder.create(order);
        }
      };
    }
  ]);
})(_);


