'use strict';

/* jshint -W098 */
angular.module('mean.shopOrder').controller('ShopOrderController', ['$scope', 'Global', 'ShopOrder',
  function($scope, Global, ShopOrder) {
    $scope.global = Global;
    $scope.package = {
      name: 'shoporder'
    };
  }
]);
