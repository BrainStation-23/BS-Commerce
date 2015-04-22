'use strict';

angular.module('mean.shopCategory').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('products-in-category', {
      url: '/category/:slug',
      controller: 'ShopCategoryController',
      templateUrl: 'shopCategory/views/shop-category-product-list.html'
    });
  }
]);
