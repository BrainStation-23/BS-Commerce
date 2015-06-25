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
	}
  ]);
})();