'use strict';

angular.module('mean.shopCategory').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shopCategory example page', {
      url: '/shopCategory/example',
      templateUrl: 'shopCategory/views/index.html'
    });
  }
]);
