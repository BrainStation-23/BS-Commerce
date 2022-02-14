'use strict';
angular.module('lightweight').controller('CheckoutSuccessController', ['$scope', '$location', '$stateParams', 'Global',
	function($scope, $location, $stateParams, Global) {

		$scope.orderId = $stateParams.orderId;
	}
]);
