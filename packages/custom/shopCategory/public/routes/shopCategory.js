'use strict';

angular.module('mean.shopCategory').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('products-in-category', {
      url: '/category/:slug',
      templateUrl: 'shopCategory/views/index.html'
    });
  }
]);
