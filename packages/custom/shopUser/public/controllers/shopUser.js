'use strict';

/* jshint -W098 */
angular.module('mean.shopUser').controller('ShopUserController', ['$scope', 'Global', 'ShopUser',
  function($scope, Global, ShopUser) {
    $scope.global = Global;
    $scope.package = {
      name: 'shopuser'
    };
  }
]);
