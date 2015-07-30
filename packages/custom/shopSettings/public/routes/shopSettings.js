'use strict';

angular.module('mean.shopSettings').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shopSettings example page', {
      url: '/shopSettings/example',
      templateUrl: 'shopSettings/views/index.html'
    });
  }
]);
