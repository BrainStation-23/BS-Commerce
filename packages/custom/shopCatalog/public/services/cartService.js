(function(_){
  'use strict';

  angular.module('mean.shopCatalog').factory('cartService', ['Global', 'Cart',
    function(Global, Cart) {
      var cart = Cart.get();
      return {
        getCart: function(){
          return cart;
        },
        addToCart: function(product, qunatity){
          cart
            .$promise
            .then(function(cart){
              var existingProduct = _.find(cart.items, function(item){
                return item.product._id === product._id;
              });

              if(!existingProduct) {
                cart.items.push({
                  product: product,
                  quantity: 1
                });
                cart.$update();
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
              }
            });
        }
      };
    }
  ]);
})(_);


