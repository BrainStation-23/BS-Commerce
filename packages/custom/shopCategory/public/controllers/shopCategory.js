'use strict';

/* jshint -W098 */
angular.module('mean.shopCategory').controller('ShopCategoryController', ['$scope', '$state', 'Global', 'ShopCategory', 'ShopProduct',
  function($scope, $state, Global, ShopCategory, ShopProduct) {
    var slug = $state.params.slug;
    $scope.global = Global;

    $scope.state={
      totalRecords:0,
      pageSize:3,
      currentPage : 1
    };

    $scope.products = [];
    $scope.category = ShopCategory.get({id: slug});

    ShopProduct.query({slug:slug},function(data, getHeader){
      $scope.products = data;
      $scope.state.totalRecords = getHeader().total;
    });
  }
]);
