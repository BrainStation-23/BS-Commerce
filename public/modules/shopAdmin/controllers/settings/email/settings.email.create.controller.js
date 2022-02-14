'use strict';

angular.module('shopAdmin').controller('settingsEmailCreateController', ['$scope', '$window', '$location', 'settingsService',
    function($scope, $window,  $location, settingsService) {
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
                        $window.toastr.success('Successfully added new email');
                        $location.path('/Settings/Email/List');
                    });
            } else {
                $scope.settings.emails.push($scope.email);
                settingsService.addNewEmailSettings($scope.settings)
                    .$promise
                    .then(function(emails) {
                        $window.toastr.success('Successfully added new email');
                        $location.path('/Settings/Email/List');
                    });
            }

        };
    }
]);
