'use strict';

angular.module('mean.settings').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('settings example page', {
      url: '/settings/example',
      templateUrl: 'settings/views/index.html'
    });
  }
]);
