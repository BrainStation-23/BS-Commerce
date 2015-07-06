(function(){
'use strict';

	angular.module('mean.shopCatalog').config(['$stateProvider',
		function($stateProvider) {
			$stateProvider.state('cart', {
			url: '/cart',
			controller: 'cartController',
			templateUrl: 'shopOrder/views/cart.html'
			});

			$stateProvider.state('checkout', {
			url: '/checkout',
			controller: 'checkoutController',
			templateUrl: 'shopOrder/views/checkout.html'
			});

			$stateProvider.state('checkout/complete', {
				url: '/checkout/complete',
				//controller: 'checkoutController',
				templateUrl: 'shopOrder/views/checkoutComplete.html'
			});

			$stateProvider.state('cart/empty', {
				url: '/cart/empty',
				templateUrl: 'shopOrder/views/emptyCart.html'
			});

			$stateProvider.state('orderDetails/:orderId', {
				url: '/orderDetails/:orderId',
				controller: 'orderController',
				templateUrl: 'shopOrder/views/orderDetails.html'
			});
		}
	]);
})();