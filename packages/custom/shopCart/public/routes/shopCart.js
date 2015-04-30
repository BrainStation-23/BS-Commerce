'use strict';

angular.module('mean.shopCart').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shopCart example page', {
      url: '/shopCart/example',
      templateUrl: 'shopCart/views/index.html'
    });
  }
]);
