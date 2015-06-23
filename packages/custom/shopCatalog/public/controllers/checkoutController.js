(function(){
  'use strict';

  angular.module('mean.shopCatalog').controller('checkoutController', ['$scope', 'Global', 'cartService',
	function($scope, Global, cartService) {
	  $scope.global = Global;
		$scope.oneAtATime = true;
		$scope.status = {
			isFirstOpen: true,
			isFirstDisabled: false
		};
	  //$scope.items = [];
       // $scope.shipping = 10;
       // $scope.tax = 0;
      //
	  //cartService.getCart()
		//.$promise
		//.then(function(cart){
		//  $scope.items = cart.items;
		//});
	  //$scope.increaseQuantity = function(item) {
       //   item.quantity+= 1;
       //   cartService.addToCart(item.product, item.quantity);
	  //};
      //
	  //$scope.decreaseQuantity = function(item) {
		//if(item.quantity <1) {
		//  return;
		//}
		//item.quantity -= 1;
       // cartService.addToCart(item.product, item.quantity);
	  //};
      //
	  //$scope.removeFromCart = function(product) {
       //   if(confirm('Are you sure you want to delete this item ?')) {
       //       cartService.removeFromCart(product);
       //   }
	  //};
	}
  ]);
})();
