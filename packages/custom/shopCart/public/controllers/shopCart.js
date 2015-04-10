'use strict';

/* jshint -W098 */
angular.module('mean.shopCart').controller('ShopCartController', ['$scope', 'Global', 'ShopCart',
  function($scope, Global, ShopCart) {
    $scope.global = Global;
    $scope.package = {
      name: 'shopCart'
    };
  }
]);
