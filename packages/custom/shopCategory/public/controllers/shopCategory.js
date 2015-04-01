'use strict';

/* jshint -W098 */
angular.module('mean.shopCategory').controller('ShopCategoryController', ['$scope', 'Global', 'ShopCategory',
  function($scope, Global, ShopCategory) {
    $scope.global = Global;
    $scope.package = {
      name: 'shopCategory'
    };
  }
]);
