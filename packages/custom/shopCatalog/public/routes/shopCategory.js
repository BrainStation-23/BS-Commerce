'use strict';

angular.module('mean.shopCatalog').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('products-in-category', {
      url: '/category/:slug',
      parent: 'master',
      controller: 'ShopCategoryController',
      templateUrl: 'shopCatalog/views/category/shop-category-product-list.html'
    });
  }
]);
