'use strict';

angular.module('mean.shopUser').config(['$viewPathProvider', '$meanStateProvider',
  function($viewPathProvider, $meanStateProvider) {
    $viewPathProvider.override('users/views/index.html', 'shopUser/views/index.html');
    $viewPathProvider.override('users/views/register.html', 'shopUser/views/register.html');
    $viewPathProvider.override('users/views/login.html', 'shopUser/views/login.html');
    $viewPathProvider.override('users/views/forgot-password.html', 'shopUser/views/forgot-password.html');

    $meanStateProvider
      .state('auth.logout',{
        url: '/logout',
        controller: 'ShopUserLogoutController'
      })
      .state('change-password', {
        url:'/auth/password',
        controller: 'ShopUserPasswordController',
        templateUrl: '/shopUser/views/password.html'
      })
      .state('manage-profile',{
        url: '/auth/profile',
        templateUrl: 'shopUser/views/profile/index.html'
      })
      .state('forgotPassword', {
          url: '/forgotPassword',
          controller: 'ShopUserPasswordController',
          templateUrl:'/shopUser/views/forgot-password.html'
        });
  }
]);
