'use strict';

/* jshint -W098 */
angular.module('mean.shopSettings').controller('ShopSettingsController', ['$scope', 'Global', 'ShopSettings',
  function($scope, Global, ShopSettings) {
    $scope.global = Global;
    $scope.package = {
      name: 'shopSettings'
    };
  }
]);
