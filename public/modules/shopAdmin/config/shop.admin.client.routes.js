'use strict';

//Setting up route
angular.module('shopAdmin').config(['$stateProvider',
	function($stateProvider) {
		//console.log('from admin route');
		// ShopAdmin state routing
		$stateProvider.
		state('admin', {
			url: '/',
			templateUrl: 'modules/shopAdmin/views/index.html',
			controller: 'DashboardController'
		});
	}
]);
