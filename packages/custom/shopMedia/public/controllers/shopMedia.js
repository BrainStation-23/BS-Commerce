'use strict';

/* jshint -W098 */
angular.module('mean.shopMedia').controller('ShopMediaController', ['$scope', 'Global', 'ShopMedia',
  function($scope, Global, ShopMedia) {
    $scope.global = Global;
    $scope.package = {
      name: 'shopMedia'
    };
  }
]);
