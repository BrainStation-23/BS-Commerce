'use strict';

/* jshint -W098 */
angular.module('mean.shopCategory').controller('ShopCategoryController', ['$scope', '$state', 'Global', 'ShopCategory', 'ShopProduct',
  function($scope, $state, Global, ShopCategory, ShopProduct) {
    var slug = $state.params.slug;
    $scope.global = Global;

    $scope.state={
      totalRecords:0,
      pageSize:6,
      currentPage : 1
    };

    var updateProducts = function(){
      ShopProduct.query({
        slug:slug,
        pageSize: $scope.state.pageSize,
        currentPage: $scope.state.currentPage
      },function(data, getHeader){
        $scope.products = data;
        $scope.state.totalRecords = getHeader().total;
      });
    };
    updateProducts();

    $scope.products = [];
    $scope.category = ShopCategory.get({id: slug});

    $scope.pageChanged = function(){
      updateProducts();
    };

    $scope.pageSizeDropDownIsOpen = false;
    $scope.setPageSize = function(pageSize, event){
      event.preventDefault();

      $scope.pageSizeDropDownIsOpen = false;

      $scope.state.currentPage = 1;
      $scope.state.pageSize = pageSize;
      updateProducts();
    };
  }
]);
