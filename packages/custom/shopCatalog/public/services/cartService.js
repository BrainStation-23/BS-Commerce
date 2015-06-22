(function(_){
  'use strict';

  angular.module('mean.shopCatalog').factory('cartService', ['$rootScope','Global', 'Cart',
    function($rootScope, Global, Cart) {
      var cart = Cart.get();
      return {
        getCart: function(){
          return cart;
        },
        addToCart: function(product, quantity){
          cart
            .$promise
            .then(function(cart){
              var existingProduct = _.find(cart.items, function(item){
                return item.product._id === product._id;
              });

              var updateProduct = function(callback) {
                  var countLength = 0,itemLength = cart.items.length;
                  _.find(cart.items, function(item){
                      if(item.product._id === product._id) {
                          item.quantity = quantity;
                      }
                      countLength += 1;
                  });
                  if(countLength === itemLength) {
                      callback();
                  }
              };

              if(!existingProduct) {
                cart.items.push({
                  product: product,
                  quantity: 1
                });
                cart.$update(function(){
                  $rootScope.$emit('cart:updated', cart);
                });
              }
              else {
                  updateProduct(function() {
                      cart.$update(function(){
                          $rootScope.$emit('cart:updated', cart);
                      });
                  });

              }
            });
        },

        removeFromCart: function(product){
          cart
            .$promise
            .then(function(cart){
              var indexInCart = _.findIndex(cart.items, function(item){
                return (item.product._id === product._id);
              });

              if(indexInCart >= 0 ){
                cart.items.splice(indexInCart, 1);

                cart.$update(function(){
                  $rootScope.$emit('cart:updated', cart);
                });
              }
            });
        }
      };
    }
  ]);
})(_);


