(function(){
	'use strict';
	angular.module('lightweight').controller('CheckoutController',
		['$scope', '$rootScope', '$location', '$state', 'Global', '_', '$timeout','$window', 'CartService','CheckoutService', 'UserService',
		function($scope, $rootScope, $location, $state, Global, _, $timeout, $window, CartService, CheckoutService, UserService) {

			$scope.cartEmpty = true;
			$scope.oneAtATime = true;
			$scope.user = {'_id':''};
			$scope.user= Global.user || {};
			$scope.order = {};
			$scope.addresses =[];
			$scope.order.shippingCost = 0;
			$scope.global = Global;

			$scope.items = [];

			var stripePublishableKey = '';

			$scope.months = [];
			$scope.years = [];
			var currentYear = new Date().getFullYear();
			$scope.creditCardInfo = {cardExpireMonth:1, cardExpireYear:currentYear};

			for (var month=1; month<=12; month++) {
				$scope.months.push(month);
			}

			for(var year = 0; year<15; year++) {
				$scope.years.push(currentYear + year);
			}

			CartService.getCart()
				.$promise
				.then(function (cart) {
					if (cart.items && cart.items.length > 0) {
						$scope.cartEmpty = false;
						$scope.items = cart.items;
						var subTotal = 0;

						_.forEach($scope.items, function(item){
							subTotal+= (item.product.info.price * item.quantity);
						});
						$scope.subTotal = subTotal;
					}
					else {
						$state.go('emptyCart');
					}

				},
				function (error) {
					$state.go('emptyCart');
				});

			CartService.getStripePublishableKey()
				.$promise
				.then(function(response) {
					stripePublishableKey = response.publishableKey;
				});

			$scope.initializeAddress = function() {
				UserService.getUserById($scope.user._id)
					.$promise
					.then(function(user) {
						$scope.user = user;
						$scope.order.user = user._id;
						if(user.addresses.length > 0) {
							angular.forEach(user.addresses, function(address) {
								$scope.addresses.push(user.firstName +' ' +user.lastName +', '+ user.email +', '+ address.addressLine1 +', '+ address.city +', '+ address.country +', '+ user.phoneNumber);
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
					firstName: $scope.user.firstName,
					lastName: $scope.user.lastName,
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
					firstName: $scope.user.firstName,
					lastName: $scope.user.lastName,
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

			$scope.cardTypeShow = function() {
				var cardNumber = $scope.creditCardInfo.cardNumber;
				if(new RegExp('^4[0-9]{12}(?:[0-9]{3})?$').test(cardNumber)) {
					return 'fa-cc-visa';
				} else if(new RegExp('^5[1-5][0-9]{14}$').test(cardNumber)) {
					return 'fa-cc-mastercard';
				} else if(new RegExp('^3[47][0-9]{13}$').test(cardNumber)) {
					return 'fa-cc-amex';
				} else if(new RegExp('^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$').test(cardNumber)) {
					return 'fa-cc-discover';
				} else if(new RegExp('^(?:2131|1800|35\d{3})\d{11}$').test(cardNumber)) {
					return 'fa-cc-jcb';
				} else {
					return 'fa-credit-card';
				}
			};

			$scope.checkCreditCardValidation = function() {

				$window.Stripe.setPublishableKey(stripePublishableKey);
				$rootScope.isBusy = true;
				//https://github.com/mjhea0/node-stripe-example/blob/master/src/server/routes/index.js

				var validCard = $window.Stripe.card.validateCardNumber($scope.creditCardInfo.cardNumber);

				if(!validCard) {
					$timeout(function() {
						$rootScope.isBusy = false;
					});
					return false;
				}
				
				$window.Stripe.card.createToken({
					number: $scope.creditCardInfo.cardNumber,
					cvc: $scope.creditCardInfo.cardCVC,
					exp_month: $scope.creditCardInfo.cardExpireMonth,
					exp_year: $scope.creditCardInfo.cardExpireYear
				}, function(status, stripeResponse){

					if(stripeResponse.error){
						$scope.cardError = stripeResponse.error.message;
						$timeout(function() {
							$rootScope.isBusy = false;
						});
					}else{
						var stripeToken = stripeResponse.id;
						$scope.order.stripeToken = stripeToken;

						$timeout(function() {
							$rootScope.isBusy = false;
							$scope.setActiveStep(6);
						});
					}
				});
			};

			$scope.confirmOrder = function() {
				addProductInfo(function() {
					CheckoutService.createOrder($scope.order)
						.$promise
						.then(function(response) {
							$scope.orderSuccess = true;
							$scope.orderId = response.orderId;
							CartService.deleteAllCartItems()
								.$promise
								.then(function(deleteResponse) {
									$rootScope.$emit('cart:updated');
									if(response.paypalRedirectUrl) {
										$window.location.href = response.paypalRedirectUrl;
									} else {
										$state.go('CheckoutSuccess',{orderId: response.orderId});
									}

								},
								function(error) {
									$rootScope.$emit('cart:updated');
									$state.go('CheckoutSuccess',{orderId: response.orderId});

								});
						},
						function(error) {
							$scope.orderSuccess = false;
						});
				});

			};

			$scope.isDisablePanel = function(stepNo) {
				var activeStep = 0, index =0;
				angular.forEach($scope.open, function(val, key) {
					index++;
					if($scope.open[key]) {
						activeStep = index;
					}
				});
				if(stepNo > activeStep && activeStep!==0) {
					return true;
				}  if(activeStep === 0) {
					$scope.open.tab1 = true;
					return false;
				}
				return false;
			};

			$scope.setActiveStep = function(stepNo) {
				$scope.open['tab'+stepNo] = true;
			};

			$scope.open = {
				tab1: true,
				tab2: false,
				tab3: false,
				tab4: false,
				tab5: false,
				tab6: false
			};
		}
	]);
})();
