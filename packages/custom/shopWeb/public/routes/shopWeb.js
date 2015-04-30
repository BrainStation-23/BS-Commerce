'use strict';

angular.module('mean.shopWeb').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('master', {
      abstract: true,
      templateUrl: 'shopWeb/views/master.html'
    });
  }
]);
