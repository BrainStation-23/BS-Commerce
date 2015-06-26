(function(){
  'use strict';

  angular.module('mean.shopCatalog').controller('cartController', ['$scope', '$location', 'Global', 'cartService',
	function($scope, $location, Global, cartService) {
	  $scope.global = Global;
	  $scope.items = [];
        $scope.shipping = 10;
        $scope.tax = 0;

	  cartService.getCart()
		.$promise
		.then(function(cart){
		  if(cart.items.length > 0){
			  $scope.items = cart.items;
		  }
		  else {
			  $location.path('/cart/empty');
		  }

		});
	  $scope.increaseQuantity = function(item) {
          item.quantity+= 1;
          cartService.addToCart(item.product, item.quantity);
	  };

	  $scope.decreaseQuantity = function(item) {
		if(item.quantity <1) {
		  return;
		}
		item.quantity -= 1;
        cartService.addToCart(item.product, item.quantity);
	  };

	  $scope.removeFromCart = function(product) {
          if(confirm('Are you sure you want to delete this item ?')) {
              cartService.removeFromCart(product);
          }
	  };
	}
  ]);
})();
