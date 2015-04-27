'use strict';

/* jshint -W098 */
angular.module('mean.shopCategory').controller('ShopCategoryController', ['$scope', '$state', 'Global', 'ShopCategory', 'ShopProduct',
  function($scope, $state, Global, ShopCategory, ShopProduct) {
    var slug = $state.params.slug;
    $scope.global = Global;

    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.state={
      totalRecords:0,
      pageSize:6,
      currentPage : 1,
      orderBy:{
        value: 'name',
        text: 'Name'
      }
    };

    var updateProducts = function(){
      ShopProduct.query({
        slug:slug,
        orderBy: $scope.state.orderBy.value,
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

    $scope.setPageSize = function(pageSize, event){
      event.preventDefault();

      $scope.state.currentPage = 1;
      $scope.state.pageSize = pageSize;
      updateProducts();
    };

    $scope.setOrderBy = function(text, value, event){
      event.preventDefault();

      $scope.state.currentPage = 1;
      $scope.state.orderBy.text = text;
      $scope.state.orderBy.value = value;

      updateProducts();
    };
  }
]);
