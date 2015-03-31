'use strict';

/* jshint -W098 */
angular.module('mean.shopCore').controller('ShopCoreController', ['$scope', 'Global', 'ShopCore',
  function($scope, Global, Shopcore) {
    $scope.global = Global;
    $scope.package = {
      name: 'shopCore'
    };
  }
]);
