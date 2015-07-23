'use strict';

angular.module('mean.shopAdmin').directive('registeredUser', ['userService',
    function(userService) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'shopAdmin/views/dashboard/registered-user.html',
            link: function(scope, element, attrs) {
                //console.log('get registered user controller');
                scope.getUserStatistics = function() {
                    userService.getUserStatistics()
                        .$promise
                        .then(function(userStatistics) {
                            scope.userStatistics = userStatistics;
                            //console.log(userStatistics);
                        });
                };
                scope.getUserStatistics();
            }
        };
    }
]);
