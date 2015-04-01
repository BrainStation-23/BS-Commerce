'use strict';

/* jshint -W098 */
angular.module('mean.shopWeb').controller('ShopWebController', ['$scope', 'Global', 'ShopWeb',
  function($scope, Global, ShopWeb) {
    $scope.global = Global;
    $scope.package = {
      name: 'shopWeb'
    };
  }
]);
