(function(){
	'use strict';
	angular.module('mean.shopOrder').controller('checkoutController', ['$scope', '$location', 'Global', '$timeout', 'cartService','checkoutService',
		function($scope, $location, Global, $timeout, cartService, checkoutService) {

			$scope.cartEmpty = true;
			$scope.oneAtATime = true;
			$scope.user = {'_id':''};
			$scope.user= Global.user || {};
			$scope.order = {};
			$scope.addresses =[];
			$scope.order.shippingCost = 10;
			$scope.tax = 0;
			$scope.tabStatus = true;

			$scope.cartId = '';
			$scope.items = [];

			$scope.activeStep = 1;


			cartService.getCart()
				.$promise
				.then(function(cart){
					if(cart.items.length > 0){
						$scope.cartEmpty = false;
						$scope.items = cart.items;
						$scope.cartId = cart._id;
					}
					else {
						$location.path('/cart/empty');
					}

				},
				function(error) {
					$location.path('/cart/empty');
				});

			$scope.initializeAddress = function() {
				cartService.getCart();
				checkoutService.getUserById($scope.user._id)
					.$promise
					.then(function(user) {
						$scope.user = user;
						$scope.order.user = user._id;
						//console.log(user);
						if(user.addresses.length > 0) {
							angular.forEach(user.addresses, function(address) {
								$scope.addresses.push(user.name +', '+ user.email +', '+ address.addressLine1 +', '+ address.city +', '+ address.country +', '+ user.phoneNumber);
							});
						}
					});
			};

			$scope.initializeAddress();

			$scope.selectBillingAddress = function(indx) {
				if(indx === '') {
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

			$scope.selectShippingAddress = function(indx) {
				if(indx === '') {
					$scope.order.shippingAddress ={};
					return;
				}
				$scope.order.shippingAddress = {
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

			var addProductInfo = function(callback) {
				var productCount = 0;
				$scope.order.productCost = 0;
				$scope.order.products = [];
				angular.forEach($scope.items, function(item) {
					var newProduct = {
						productId: item.product._id,
						name: item.product.info.name,
						price:item.product.info.price,
						tax: $scope.tax,
						quantity: item.quantity,
						sku: item.product.info.sku
					};
					$scope.order.productCost += (newProduct.price * newProduct.quantity);
					$scope.order.products.push(newProduct);
					productCount +=1;
				});
				if(productCount === $scope.items.length) {
					$scope.order.totalCost = $scope.order.productCost + $scope.order.shippingCost;
					callback();
				}
			};

			$scope.confirmOrder = function() {
				addProductInfo(function() {
					checkoutService.createOrder($scope.order)
						.$promise
						.then(function(response) {
							$scope.orderSuccess = true;
							$scope.orderId = response.orderId;
							cartService.deleteCartById($scope.cartId)
								.$promise
								.then(function(deleteResponse) {
									$scope.cartDeleteSuccess = true;
									$scope.cartEmpty = true;
								},
								function(error) {
									$scope.cartDeleteSuccess = false;
								});
						},
						function(error) {
							$scope.orderSuccess = false;
						});
				});

			};



			$scope.isActiveAnchor = function(stepNo) {
				if(stepNo <= $scope.activeStep) {
					return 'step-enable';
				}
				return 'step-disable';
			};

			$scope.isActiveHeading = function(stepNo) {
				if(stepNo <= $scope.activeStep) {
					return 'enable-step-bg-color';
				}
				return 'disable-step-bg-color';
			};

			$scope.isCollapsed = function(stepNo) {
				if(stepNo === $scope.activeStep) {
					return 'tab-open';
				}
				return 'tab-collapsed';
			};

			$scope.setActiveStep = function(stepNo) {
				$scope.activeStep = stepNo;
			};
		}
	]);
})();
