(function(_){
  'use strict';

  angular.module('mean.shopCatalog').factory('checkoutService', ['$rootScope','Global', 'Cart', '$resource',
    function($rootScope, Global, Cart, $resource) {
      var cart = Cart.get();
      return {
        getCart: function(){
          return cart;
        },
        getUserById: function(userId) {
            var userById = $resource('/auth/user/:userId', {userId:'@userId'});
            return userById.get({userId: userId});
        }
      };
    }
  ]);
})(_);


