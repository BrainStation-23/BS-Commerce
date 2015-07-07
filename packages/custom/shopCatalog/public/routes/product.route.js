'use strict';

angular.module('mean.shopCatalog').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('products-details', {
      url: '/products/:sku',
      parent:'master',
      controller: 'ShopProductController',
      templateUrl: 'shopCatalog/views/product/product-details.html'
    });
  }
]);
