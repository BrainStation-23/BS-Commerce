'use strict';

angular.module('mean.shopCatalog').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shopCatalog example page', {
      url: '/shopCatalog/example',
      templateUrl: 'shopCatalog/views/index.html'
    });
  }
]);
