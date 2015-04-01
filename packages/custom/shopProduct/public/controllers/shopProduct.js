'use strict';

/* jshint -W098 */
angular.module('mean.shopProduct').controller('ShopProductController', ['$scope', 'Global', 'ShopProduct',
  function($scope, Global, ShopProduct) {
    $scope.global = Global;
    $scope.package = {
      name: 'shopProduct'
    };
  }
]);
