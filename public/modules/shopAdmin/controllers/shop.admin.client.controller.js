'use strict';

// ShopAdmins controller
angular.module('shopAdmin').controller('ShopAdminsController', ['$scope', '$stateParams', '$location', 'Global', 'ShopAdmins',
	function($scope, $stateParams, $location, Authentication, ShopAdmins) {
		$scope.authentication = Authentication;

		// Create new ShopAdmin
		$scope.create = function() {
			// Create new ShopAdmin object
			var shopAdmin = new ShopAdmins ({
				name: this.name
			});

			// Redirect after save
			shopAdmin.$save(function(response) {
				$location.path('shopAdmins/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing ShopAdmin
		$scope.remove = function(shopAdmin) {
			if ( shopAdmin ) {
				shopAdmin.$remove();

				for (var i in $scope.shopAdmins) {
					if ($scope.shopAdmins [i] === shopAdmin) {
						$scope.shopAdmins.splice(i, 1);
					}
				}
			} else {
				$scope.shopAdmin.$remove(function() {
					$location.path('shopAdmins');
				});
			}
		};

		// Update existing ShopAdmin
		$scope.update = function() {
			var shopAdmin = $scope.shopAdmin;

			shopAdmin.$update(function() {
				$location.path('shopAdmins/' + shopAdmin._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of ShopAdmins
		$scope.find = function() {
			$scope.shopAdmins = ShopAdmins.query();
		};

		// Find existing ShopAdmin
		$scope.findOne = function() {
			$scope.shopAdmin = ShopAdmins.get({
				shopAdminId: $stateParams.shopAdminId
			});
		};
	}
]);
