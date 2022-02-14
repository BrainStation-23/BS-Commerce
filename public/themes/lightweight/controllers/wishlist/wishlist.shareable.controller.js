'use strict';

angular.module('lightweight').controller('WishlistShareableController',
	['$scope', '$rootScope', '$state', '$stateParams', '_', 'WishlistService',
	function($scope, $rootScope, $state, $stateParams, _, WishlistService) {
		$scope.items = [];
		$scope.wishlistId = $stateParams.wishlistId;

		WishlistService.getWishlistById($scope.wishlistId)
			.$promise
			.then(function(wishlist){
				$scope.items = wishlist.items;
			});

		$scope.addWishlistToCart = function() {
			var itemsForCart = [];

			_.forEach($scope.items, function(item) {
				if(item.addToCart) {
					itemsForCart.push({product: item.product._id, quantity: item.quantity});
				}
			});

			if(itemsForCart.length) {
				WishlistService.addWishlistItemsToCart(itemsForCart)
					.$promise
					.then(function(updatedWishlist) {
						console.log('update', updatedWishlist);
						$scope.items = updatedWishlist.items;
						$rootScope.$emit('cart:updated');
					}, function(error) {
						console.log('Error= ',error);
					});
			}
		};
	}
]);
