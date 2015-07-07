'use strict';

/* jshint -W098 */
angular.module('mean.shopCatalog').controller('ShopProductController', ['$scope', '$state', 'Global', 'ShopProduct', 'cartService',
  function($scope, $state, Global, ShopProduct, cartService) {
    $scope.global = Global;
    var sku = $state.params.sku;

    $scope.product = null;
    $scope.quantity = 1;
    $scope.slides = [];

    ShopProduct.get({id: sku}, function(product){
      $scope.product = product;

      $scope.slides = _.map(product.photos, function(photo){
        return {
          image: '/api/products/photos/' + photo
        };
      });

      cartService.getCart()
        .$promise
        .then(function(cart){
          var indexInCart = _.findIndex(cart.items, function(item){
            return item.product._id === product._id;
          });

          product.addedToCart = indexInCart >= 0;
        });
    });

    $scope.toggleCartStatus = function(product, event){
      event.preventDefault();

      product.addedToCart = !(product.addedToCart);

      if(product.addedToCart) {
        cartService.addToCart(product, $scope.quantity);
      }else{
        cartService.removeFromCart(product);
      }

    };
  }
]);
