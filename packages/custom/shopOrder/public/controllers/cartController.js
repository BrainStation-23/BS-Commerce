(function(){
	'use strict';

	angular.module('mean.shopOrder').controller('cartController', ['$scope', '$location', '$state', 'Global', 'cartService',
		function($scope, $location, $state, Global, cartService) {
	  		$scope.global = Global;
	  		$scope.items = [];
			$scope.shipping = 10;
			$scope.tax = 0;

			if(!$scope.global.authenticated) {
				$state.go('auth.login');
			} else {
				cartService.getCart()
					.$promise
					.then(function(cart){
						if(cart.items && cart.items.length > 0){
							$scope.items = cart.items;
						}
						else {
							$state.go('emptyCart');
						}
					});
			}
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
