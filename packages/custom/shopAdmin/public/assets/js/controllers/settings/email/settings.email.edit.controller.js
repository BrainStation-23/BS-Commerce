'use strict';

angular.module('mean.shopAdmin').controller('settingsEmailEditController', ['$scope', '$location', '$stateParams', '$timeout', 'settingsService',
    function($scope, $location, $stateParams, $timeout, settingsService) {
        $scope.settings= {};
        $scope.email = {};
        $scope.getEmailSettings = function() {
            settingsService.getEmailSettings()
                .$promise
                .then(function(settings) {
                    $scope.settings = settings;
                    $scope.email = jQuery.extend({}, settings.emails[$stateParams.emailIndex]);
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
                    $scope.updateSuccessMsg = response.msg;
                    $timeout(function() {
                        $scope.updateSuccessMsg = '';
                        $location.path('/Settings/Email/List');
                    },2000);
                });
        };

        $scope.deleteEmailAddress = function() {
            $scope.settings.emails.pop($stateParams.emailIndex);
            settingsService.addNewEmailSettings($scope.settings)
                .$promise
                .then(function(response) {
                    $scope.updateSuccessMsg = response.msg;
                    $timeout(function() {
                        $scope.updateSuccessMsg = '';
                        $location.path('/Settings/Email/List');
                    },2000);
                });
        };
    }
]);