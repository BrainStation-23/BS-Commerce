'use strict';

angular.module('mean.shopThemes').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shopThemes example page', {
      url: '/shopThemes/example',
      templateUrl: 'shopThemes/views/index.html'
    });
  }
]);
