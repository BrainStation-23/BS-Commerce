'use strict';

angular.module('lightweight').controller('CartController', ['$scope', '$rootScope', '$window' ,'$location', '$state', 'Global', '_', 'CartService',
	function($scope, $rootScope, $window, $location, $state, Global, _, CartService) {
		$scope.global = Global;
		$scope.items = [];
		$scope.shipping = 0;
		$scope.tax = 0;

		CartService.getCart()
			.$promise
			.then(function(cart){
				if(cart.items && cart.items.length > 0){
					$scope.items = cart.items;
					var subTotal = 0;

					_.forEach($scope.items, function(item){
						subTotal+= (item.product.info.price * item.quantity);
					});
					$scope.subTotal = subTotal;
				}
				else {
					$state.go('emptyCart');
				}
			});

		$scope.editCartItem = function(item) {
			item.activeForEdit = true;
			item.editQuantity = angular.copy(item.quantity);
		};

		$scope.cancelEditCartItem = function(item) {
			item.activeForEdit = false;
			item.editQuantity = undefined;
		};

		$scope.updateCartItem = function(item) {
			var product = { item: {product: item.product._id, quantity: item.editQuantity}};
			CartService.updateCartItem(product)
				.$promise
				.then(function(updatedCart) {
					$scope.items = updatedCart.items;
					$rootScope.$emit('cart:updated');
					$window.toastr.success('Updated cart');
				});
		};

		$scope.deleteCartItem = function(item) {
			if(confirm('Are you sure you want to delete this item ?')) {
				var product = { item: {product: item.product._id}};
				CartService.deleteCartItem(product)
					.$promise
					.then(function(updatedCart) {
						$scope.items = updatedCart.items;
						$rootScope.$emit('cart:updated');
						$window.toastr.success('Updated cart');
					});
			}
		};

		$scope.goToCheckoutPage = function () {

			if(!$scope.global.isRegistered) {
				$state.go('CheckoutAsGuest', {returnUrl:'Checkout'});
			} else {
				$state.go('Checkout');
			}
		};
	}
]);
