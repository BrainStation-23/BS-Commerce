'use strict';

angular.module('mean.shopAdmin').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shopAdmin example page', {
      url: '/shopAdmin/example',
      templateUrl: 'shopAdmin/views/index.html'
    });
  }
]);
