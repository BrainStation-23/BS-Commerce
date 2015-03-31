'use strict';

angular.module('mean.shopUser').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('admin',{
        abstract: true,
        url: '/admin',
        template: '<ui-view/>'
      })
      .state('admin.settings',{
        abstract: true,
        url: '/settings',
        template: '<ui-view/>'
      });

    $stateProvider
      .state('admin.settings.users', {
        parent: 'admin.settings',
        url: '/users',
        templateUrl: 'shopUser/views/index.html'
      });
  }
]);
