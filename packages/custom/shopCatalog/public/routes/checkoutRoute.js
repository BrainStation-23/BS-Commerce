(function(){
'use strict';

	angular.module('mean.shopCatalog').config(['$stateProvider',
		function($stateProvider) {
			$stateProvider.state('cart', {
			url: '/cart',
			controller: 'cartController',
			templateUrl: 'shopCatalog/views/cart.html'
			});

			$stateProvider.state('checkout', {
			url: '/checkout',
			controller: 'checkoutController',
			templateUrl: 'shopCatalog/views/checkout.html'
			});

			$stateProvider.state('checkout/complete', {
				url: '/checkout/complete',
				//controller: 'checkoutController',
				templateUrl: 'shopCatalog/views/checkoutComplete.html'
			});

			$stateProvider.state('cart/empty', {
				url: '/cart/empty',
				templateUrl: 'shopCatalog/views/emptyCart.html'
			});

			$stateProvider.state('orderDetails/:orderId', {
				url: '/orderDetails/:orderId',
				//controller: 'orderController',
				templateUrl: 'shopCatalog/views/orderDetails.html'
			});
		}
	]);
})();