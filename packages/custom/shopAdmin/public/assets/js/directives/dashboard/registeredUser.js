'use strict';

angular.module('mean.shopAdmin').directive('registeredUser', ['userService',
    function(userService) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'shopAdmin/views/dashboard/registered-user.html',
            link: function(scope, element, attrs) {
                scope.getUserStatistics = function() {
                    userService.getUserStatistics()
                        .$promise
                        .then(function(userStatistics) {
                            scope.userStatistics = userStatistics;
                        });
                };
                scope.getUserStatistics();
            }
        };
    }
]);
