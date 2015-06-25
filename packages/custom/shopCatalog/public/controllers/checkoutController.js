(function(){
	'use strict';
	angular.module('mean.shopCatalog').controller('checkoutController', ['$scope', '$compile', 'Global', '$timeout', 'cartService','checkoutService',
		function($scope, $compile, Global, $timeout, cartService, checkoutService) {
			//$scope.global = Global;
			$scope.oneAtATime = true;
			$scope.status = {
				isFirstOpen: true,
				isFirstDisabled: false
			};
			$scope.user = {'_id':''};
			$scope.user= user || {};
			$scope.order = {};
			$scope.addresses =[];
			$scope.order.products =[];
			$scope.order.productCost = 0;
			$scope.order.shippingCost = 10;


			//console.log(user);
			$scope.items = [];
			//$scope.shipping = 10;
			$scope.tax = 0;

			cartService.getCart()
				.$promise
				.then(function(cart){
					$scope.items = cart.items;
				});

			$scope.initializeAddress = function() {
				cartService.getCart();
				checkoutService.getUserById($scope.user._id)
					.$promise
					.then(function(user) {
						$scope.user = user;
						//console.log(user);
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
				//$scope.pleaseWait = true;
				//$timeout(function(){
				//	$scope.pleaseWait = false;
				//},2000);
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
					console.log($scope.order);
				});

			};
			//console.log(user.name);
		}
	]);
})();
