'use strict';

angular.module('mean.shopMedia').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shopMedia example page', {
      url: '/shopMedia/example',
      templateUrl: 'shopMedia/views/index.html'
    });
  }
]);
