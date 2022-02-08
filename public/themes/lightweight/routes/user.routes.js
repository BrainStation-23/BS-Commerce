'use strict';

// Setting up route
angular.module('lightweight').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // Home state routing
        $stateProvider.
        state('profile', {
            url: '/settings/profile',
            controller: 'SettingsController',
            templateUrl: 'themes/lightweight/views/user/settings/edit-profile.client.view.html'
        }).
        state('password', {
            url: '/settings/password',
            templateUrl: 'themes/lightweight/views/user/settings/change-password.client.view.html'
        }).
        state('signup', {
            url: '/signup',
            controller: 'AuthenticationController',
            templateUrl: 'themes/lightweight/views/user/authentication/signup.client.view.html'
        }).
        state('signin', {
            url: '/signin',
            controller: 'AuthenticationController',
            templateUrl: 'themes/lightweight/views/user/authentication/signin.client.view.html'
        }).
        state('forgot', {
            url: '/password/forgot',
            controller: 'PasswordController',
            templateUrl: 'themes/lightweight/views/user/password/forgot-password.client.view.html'
        }).
        state('reset-invalid', {
            url: '/password/reset/invalid',
            templateUrl: 'themes/lightweight/views/user/password/reset-password-invalid.client.view.html'
        }).
        state('reset-success', {
            url: '/password/reset/success',
            templateUrl: 'themes/lightweight/views/user/password/reset-password-success.client.view.html'
        }).
        state('reset', {
            url: '/password/reset/:token',
            controller: 'PasswordController',
            templateUrl: 'themes/lightweight/views/user/password/reset-password.client.view.html'
        });
    }
]);
