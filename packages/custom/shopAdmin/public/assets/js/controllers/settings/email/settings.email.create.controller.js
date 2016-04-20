'use strict';

angular.module('mean.shopAdmin').controller('settingsEmailCreateController', ['$scope', '$location', 'settingsService',
    function($scope, $location, settingsService) {
        $scope.settings= {};
        $scope.email = {};
        $scope.getEmailSettings = function() {
            settingsService.getEmailSettings()
                .$promise
                .then(function(settings) {
                    $scope.settings = settings;
                });
        };

        $scope.getEmailSettings();

        $scope.addNewEmailAddress = function() {
            if($scope.email.isDefault) {
                angular.forEach($scope.settings.emails, function(email) {
                    email.isDefault = false;
                });
            }
            if(!$scope.settings.emails) {
                $scope.settings.emails = [];
                $scope.settings.emails.push($scope.email);
                settingsService.addNewSettingsWithEmail($scope.settings)
                    .$promise
                    .then(function(emails) {
                        $location.path('/Settings/Email/List');
                    });
            } else {
                $scope.settings.emails.push($scope.email);
                settingsService.addNewEmailSettings($scope.settings)
                    .$promise
                    .then(function(emails) {
                        $location.path('/Settings/Email/List');
                    });
            }

        };
    }
]);