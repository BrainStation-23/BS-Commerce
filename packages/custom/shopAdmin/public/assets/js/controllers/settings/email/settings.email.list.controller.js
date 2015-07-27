'use strict';

angular.module('mean.shopAdmin').controller('settingsEmailListController', ['$scope', '$location', 'settingsService',
    function($scope, $location, settingsService) {
        console.log('get email settings controller');
        $scope.getEmailSettings = function() {
            settingsService.getEmailSettings()
                .$promise
                .then(function(emails) {
                    console.log(emails);
                });
        };

        $scope.getEmailSettings();

        $scope.goToCreateEmailPage = function() {
            //console.log('call');
            $location.path('/Settings/Email-Create');
        };
    }
]);
