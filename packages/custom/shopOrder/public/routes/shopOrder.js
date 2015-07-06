'use strict';

angular.module('mean.shopOrder').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shoporder example page', {
      url: '/shoporder/example',
      templateUrl: 'shopOrder/views/index.html'
    });
  }
]);
