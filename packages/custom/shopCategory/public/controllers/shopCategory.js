'use strict';

/* jshint -W098 */
angular.module('mean.shopCategory').controller('ShopCategoryController', ['$scope', '$state', 'Global', 'ShopCategory', 'ShopProduct',
  function($scope, $state, Global, ShopCategory, ShopProduct) {
    $scope.global = Global;

    $scope.products = ShopProduct.query({slug: $state.params.slug});
    $scope.package = {
      name: $state.params.slug
    };
  }
]);
