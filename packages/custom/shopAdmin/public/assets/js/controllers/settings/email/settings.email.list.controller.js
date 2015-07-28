'use strict';

angular.module('mean.shopAdmin').controller('settingsEmailListController', ['$scope', '$location', 'settingsService',
    function($scope, $location, settingsService) {
        $scope.settings = {};
        $scope.getEmailSettings = function() {
            settingsService.getEmailSettings()
                .$promise
                .then(function(settings) {
                    $scope.settings = settings;
                });
        };

        $scope.getEmailSettings();
    }
]);
