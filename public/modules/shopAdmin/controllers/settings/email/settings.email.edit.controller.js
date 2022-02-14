'use strict';

angular.module('shopAdmin').controller('settingsEmailEditController', ['$scope', '$window', '$location', '$stateParams', '$timeout', 'settingsService',
    function($scope, $location, $window, $stateParams, $timeout, settingsService) {
        $scope.settings= {};
        $scope.email = {};
        $scope.passwordFieldType = 'password';
        $scope.getEmailSettings = function() {
            settingsService.getEmailSettings()
                .$promise
                .then(function(settings) {
                    $scope.settings = settings;
                    $scope.email = angular.copy(settings.emails[$stateParams.emailIndex]);//previous jQuery.extend({}, source)
                });
        };

        $scope.getEmailSettings();

        $scope.editEmailAddress = function() {
            if($scope.email.isDefault) {
                angular.forEach($scope.settings.emails, function(email) {
                    email.isDefault = false;
                });
            }

            $scope.settings.emails[$stateParams.emailIndex] = $scope.email;
            settingsService.addNewEmailSettings($scope.settings)
                .$promise
                .then(function(response) {
                    $timeout(function() {
                        $window.toastr.success(response.msg);
                        $location.path('/Settings/Email/List');
                    },2000);
                });
        };

        $scope.deleteEmailAddress = function() {
            $scope.settings.emails.pop($stateParams.emailIndex);
            settingsService.addNewEmailSettings($scope.settings)
                .$promise
                .then(function(response) {
                    $timeout(function() {
                        $window.toastr.success(response.msg);
                        $location.path('/Settings/Email/List');
                    },2000);
                });
        };

        $scope.showPassword = function() {
          $scope.passwordFieldType = 'text';
        };

        $scope.hidePassword = function() {
            $scope.passwordFieldType = 'password';
        };
    }
]);
