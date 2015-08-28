'use strict';

angular.module('mean.shopThemes').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('Contact', {
      url: '/Contact',
      templateUrl: 'shopThemes/views/contact.html'
    });
  }
]);
