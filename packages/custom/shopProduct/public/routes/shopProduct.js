'use strict';

angular.module('mean.shopProduct').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shopProduct example page', {
      url: '/shopProduct/example',
      templateUrl: 'shopProduct/views/index.html'
    });
  }
]);
