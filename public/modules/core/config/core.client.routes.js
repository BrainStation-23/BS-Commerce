'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		//var themeName = 'lightweight';
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('core', {
			url: '/core',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);
