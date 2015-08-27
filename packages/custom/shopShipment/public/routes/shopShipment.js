'use strict';

angular.module('mean.shopShipment').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shopShipment example page', {
      url: '/shopShipment/example',
      templateUrl: 'shopShipment/views/index.html'
    });
  }
]);
