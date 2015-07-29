'use strict';

angular.module('mean.shopAdmin').controller('settingsEmailListController', ['$scope', '$location', '$timeout', 'settingsService',
    function($scope, $location, $timeout, settingsService) {
        $scope.settings = {};
        $scope.email = {};
        $scope.getEmailSettings = function() {
            settingsService.getEmailSettings()
                .$promise
                .then(function(settings) {
                    $scope.settings = settings;
                });
        };

        $scope.getEmailSettings();

        var resetDefaultEmail = function(callback) {
            var emailCount = 0;
            angular.forEach($scope.settings.emails, function(email) {
                email.isDefault = false;
                emailCount+=1;
            });
            if($scope.settings.emails.length === emailCount) {
                callback();
            }
        };

        $scope.markAsDefaultEmail = function(emailIndex) {
            resetDefaultEmail(function() {
                $scope.settings.emails[emailIndex].isDefault = true;
                settingsService.editEmailSettings($scope.settings)
                    .$promise
                    .then(function(response) {
                        $scope.updateSuccessMsg = response.msg;
                        $timeout(function(){
                            $scope.updateSuccessMsg = '';
                        },2000);
                    });
            });
        };

        $scope.testEmailSend = function() {
            settingsService.testEmailSend($scope.email)
              .$promise
              .then(function(resposnse) {
                    $scope.sendSuccess = resposnse.msg;
                    $timeout(function() {
                        $scope.sendSuccess = '';
                    },2000);
              },function(error) {
                    $scope.sendFailed = error.data.msg;
                });
        };
    }
]);
