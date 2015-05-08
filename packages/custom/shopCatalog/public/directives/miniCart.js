(function(_){
  'use strict';

  angular.module('mean.shopCatalog').directive('miniCart', ['$rootScope', 'Global', 'cartService',
    function($rootScope, Global, cartService) {
      return{
        replace: true,
        templateUrl: '/shopCatalog/views/mini-cart.html',
        link: function(scope, element, attrs){
          scope.subTotal = 0;
          scope.items = [];

          var updateCart = function(){
            cartService.getCart()
              .$promise
              .then(function(cart){
                scope.items = cart.items;
                var subTotal = 0;

                _.forEach(scope.items, function(item){
                  subTotal+= (item.product.info.price * item.quantity);
                });

                scope.subTotal = subTotal;
              });
          };

          $rootScope.$on('cart:updated', function(){
            updateCart();
          });

          updateCart();
        }
      };
    }
  ]);
})(_);