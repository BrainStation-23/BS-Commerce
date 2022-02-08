'use strict';

angular.module('lightweight').controller('CompareController',
	['$scope', '$rootScope', '$timeout', '$location', '$state', 'Global', '$window', '_', 'CompareService',
	function($scope, $rootScope, $timeout, $location, $state, Global, $window, _, CompareService) {
		$scope.global = Global;
		$scope.items = [];
		$scope.compareId = '';

		var getUpdateCompareItems = function() {
			CompareService.getCompare()
				.$promise
				.then(function(compare){
					$scope.compareId = compare._id;
					$scope.items = compare.items;
				});
		};
		getUpdateCompareItems();

		$scope.deleteCompareItem = function(item) {
			if(confirm('Are you sure you want to delete this item ?')) {
				var product = { item: {product: item.product._id}};
				CompareService.deleteCompareItem(product)
					.$promise
					.then(function(updatedCompare) {
						$scope.items = updatedCompare.items;
					});
			}
		};

		$scope.deleteAllCompareItems = function() {
			if(confirm('Are you sure you want to clear compare list ?')) {
				CompareService.deleteAllCompareItems()
					.$promise
					.then(function(updatedCompare) {
						$scope.items = updatedCompare.items;
					});
			}
		};
	}
]);
