'use strict';

/* jshint -W098 */
angular.module('mean.shopThemes').controller('ShopThemesController', ['$scope', 'Global', 'ShopThemes',
  function($scope, Global, ShopThemes) {
    $scope.global = Global;
    $scope.package = {
      name: 'shopThemes'
    };
  }
]);
