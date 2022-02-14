'use strict';

/* jshint -W098 */
angular.module('mean.shopThemes').controller('ShopThemesController', ['$scope', 'Global', 'ShopThemes',
  function($scope, Global, ShopThemes) {
    $scope.global = Global;

    $scope.package = {
      name: 'shopThemes'
    };

    ShopThemes.getTheme()
        .$promise
        .then(function(theme) {
          console.log('theme name = ',theme);
          $scope.global.theme = theme;
        }, function(error) {
          console.log('Not found theme');
        });
  }
]);
