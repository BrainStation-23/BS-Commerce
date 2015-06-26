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
				//$scope.order.billingAddress.push($scope.billingAddress);
				console.log('add billing address');
				//var el =angular.element('#shippingAddress');
				//el.attr('is-open', true);
				//console.log(el);
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
				//$scope.pleaseWait = true;
				//$timeout(function(){
				//	$scope.pleaseWait = false;
				//},2000);
				//$scope.order.shippingAddress.push($scope.shippingAddress);
				console.log('add shipping address');
				//var el =angular.element('#shippingAddress');
				//el.attr('is-open', true);
				//console.log(el);
			};

			$scope.addShippingMethod = function() {
				console.log('add shipping method');
				console.log($scope.order.shippingMethod);
			};

			$scope.addPaymentMethod = function() {
				console.log('add payment method');
				console.log($scope.order.paymentMethod);
			};

			$scope.addPaymentInfo = function() {
				console.log('add payment info');
				console.log($scope.order.paymetnInfo.purchaseOrderNumber);
			};

			var addProductInfor = function(callback) {
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
				//$scope.order.products = $scope.items;
				addProductInfor(function() {
					//console.log($scope.order);
					checkoutService.createOrder($scope.order)
						.$promise
						.then(function(response) {
							$scope.orderSuccess = true;
							$scope.orderId = response.orderId;
							cartService.deleteCartById($scope.cartId)
								.$promise
								.then(function(deleteResponse) {
									//console.log(response.orderId);
									$scope.cartDeleteSuccess = true;
									$scope.cartEmpty = true;
									//$location.path('/checkout/complete')
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
