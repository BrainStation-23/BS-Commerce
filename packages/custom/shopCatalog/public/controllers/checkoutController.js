(function(){
	'use strict';
	angular.module('mean.shopCatalog').controller('checkoutController', ['$scope', 'Global', 'cartService','checkoutService',
		function($scope, Global, cartService, checkoutService) {
			$scope.global = Global;
			$scope.oneAtATime = true;
			$scope.status = {
				isFirstOpen: true,
				isFirstDisabled: false
			};
			$scope.user = {'_id':''};
			$scope.user= user || {};
			$scope.order = {};
			$scope.addresses =[];


			//console.log(user);

			$scope.initializeAddress = function() {
				cartService.getCart();
				checkoutService.getUserById($scope.user._id)
					.$promise
					.then(function(user) {
						$scope.user = user;
						console.log(user);
						if(user.addresses.length > 0) {
							angular.forEach(user.addresses, function(address) {
								$scope.addresses.push(user.name +', '+ user.email +', '+ user.addresses[0].addressLine1 +', '+ user.addresses[0].city +', '+ user.addresses[0].country +', '+ user.phoneNumber);
							});
						}
					});
			};

			$scope.initializeAddress();

			$scope.selectBillingAddress = function(indx) {
				//console.log(typeof indx);
				if(indx === 'null') {
					$scope.order.billingAddress ={};
					return;
				}
				$scope.order.billingAddress = {
					name: $scope.user.name,
					email: $scope.user.email,
					addressLine1: $scope.user.addresses[indx].addressLine1,
					addressLine2: $scope.user.addresses[indx].addressLine2,
					city: $scope.user.addresses[indx].city,
					country: $scope.user.addresses[indx].country,
					postCode: $scope.user.addresses[indx].postCode,
					phoneNumber: $scope.user.phoneNumber
				};
			};

			$scope.addBillingAddress = function() {
				console.log('add bill address');
			};
			//console.log(user.name);
		}
	]);
})();
