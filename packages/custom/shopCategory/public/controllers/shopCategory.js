'use strict';

/* jshint -W098 */
angular.module('mean.shopCategory').controller('ShopCategoryController', ['$scope', '$state', 'Global', 'ShopCategory', 'ShopProduct',
  function($scope, $state, Global, ShopCategory, ShopProduct) {
    var slug = $state.params.slug;
    $scope.global = Global;

    $scope.category = ShopCategory.get({id: slug});
    $scope.products = ShopProduct.query({slug:slug});
  }
]);
