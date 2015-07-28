'use strict';

angular.module('mean.shopAdmin').controller('settingsEmailCreateController', ['$scope', '$location', 'settingsService',
    function($scope, $location, settingsService) {
        $scope.settings= {};
        $scope.emails = {};
        $scope.getEmailSettings = function() {
            settingsService.getEmailSettings()
                .$promise
                .then(function(settings) {
                    $scope.settings = settings;
                });
        };

        $scope.getEmailSettings();

        $scope.addNewEmailAddress = function() {
            $scope.settings.emails.push($scope.emails);
            settingsService.addNewEmailSettings($scope.settings)
                .$promise
                .then(function(emails) {
                    $scope.settings.emails = emails;
                });
        };
    }
]);