(function(){
  'use strict';

  angular.module('mean.shopCatalog').factory('cartService', ['Global', 'Cart',
    function(Global, Cart) {
      var cart = Cart.get();
      return {
        getCart: function(){
          return cart;
        },
        addToCart: function(product){
          cart.items.push(product);
          Cart.update(null, cart)
            .$promise
            .error(console.log);
        }
      };
    }
  ]);
})();


