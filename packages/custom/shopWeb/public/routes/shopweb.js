'use strict';

angular.module('mean.shopWeb').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shopWeb example page', {
      url: '/shopWeb/example',
      templateUrl: 'shopWeb/views/index.html'
    });
  }
]);
