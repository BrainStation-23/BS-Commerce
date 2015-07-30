'use strict';

/* jshint -W098 */
angular.module('mean.shopShipment').controller('ShopShipmentController', ['$scope', 'Global', 'ShopShipment',
  function($scope, Global, ShopShipment) {
    $scope.global = Global;
    $scope.package = {
      name: 'shopShipment'
    };
  }
]);
