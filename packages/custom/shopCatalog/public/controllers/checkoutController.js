(function(){
  'use strict';

  angular.module('mean.shopCatalog').controller('checkoutController', ['$scope', 'Global', 'cartService',
    function($scope, Global, cartService) {
      $scope.global = Global;
      $scope.items = [];

      cartService.getCart()
        .$promise
        .then(function(cart){
          $scope.items = cart.items;
        });
    }
  ]);
})();
