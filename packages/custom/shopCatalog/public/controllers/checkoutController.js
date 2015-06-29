(function(){
	'use strict';
	angular.module('mean.shopCatalog').controller('checkoutController', ['$scope', '$location', 'Global', '$timeout', 'cartService','checkoutService',
		function($scope, $location, Global, $timeout, cartService, checkoutService) {
			//$scope.global = Global;

			//$scope.checkoutPageShow = false;
			$scope.cartEmpty = true;
			$scope.oneAtATime = true;
			$scope.status = {
				isFirstOpen: true,
				isFirstDisabled: false
			};
			$scope.user = {'_id':''};
			$scope.user= Global.user || {};
			$scope.order = {};
			$scope.addresses =[];
			$scope.order.shippingCost = 10;
			$scope.tax = 0;
			$scope.tabStatus = true;


			//console.log(Global.user);
			$scope.cartId = '';
			$scope.items = [];
			//$scope.shipping = 10;


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

				});

			var openTab = function(tabElement) {
				tabElement.parent().attr('is-open', true);
				tabElement.attr('is-open', true);
				tabElement.removeAttr('collapse');
				tabElement.attr('collapse',false);
				tabElement.css('height','auto');
				tabElement.addClass('in');
			};

			var closeTab = function(tabElement) {
				tabElement.attr('is-open', false);
				tabElement.removeAttr('collapse');
				tabElement.attr('collapse',true);
				tabElement.css('height',0);
			};

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
				//$scope.pleaseWait = true;
				//$timeout(function(){
				//	$scope.pleaseWait = false;
				//},2000);
				$scope.activeShippingAddressTab = true;
				var billingAddressElem = angular.element('#billingAddress > div').last();
				var shippingAddressElem = angular.element('#shippingAddress > div').last();
				closeTab(billingAddressElem);
				openTab(shippingAddressElem);

			};

			$scope.selectShippingAddress = function(indx) {
				//console.log(typeof indx);
				if(indx === 'null') {
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

			$scope.addShippingAddress = function() {
				$scope.activeShippingMethodTab = true;

				var shippingAddressElem = angular.element('#shippingAddress > div').last();
				var shippingMethodElem = angular.element('#shippingMethod > div').last();
				closeTab(shippingAddressElem);
				openTab(shippingMethodElem);
			};

			$scope.addShippingMethod = function() {
				$scope.activePaymentMethodTab = true;

				var shippingMethodElem = angular.element('#shippingMethod > div').last();
				var paymentMethodElem = angular.element('#paymentMethod > div').last();
				closeTab(shippingMethodElem);
				openTab(paymentMethodElem);
			};

			$scope.addPaymentMethod = function() {
				$scope.activePaymentInformationTab = true;

				var paymentMethodElem = angular.element('#paymentMethod > div').last();
				var paymentInfoElem = angular.element('#paymentInformation > div').last();
				closeTab(paymentMethodElem);
				openTab(paymentInfoElem);
			};

			$scope.addPaymentInfo = function() {
				$scope.activeConfirmOrderTab = true;

				var paymentInfoElem = angular.element('#paymentInformation > div').last();
				var confirmOrderElem = angular.element('#confirmOrder > div').last();
				closeTab(paymentInfoElem);
				openTab(confirmOrderElem);
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
						quantity: item.quantity
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
			//console.log(user.name);
		}
	]);
})();
