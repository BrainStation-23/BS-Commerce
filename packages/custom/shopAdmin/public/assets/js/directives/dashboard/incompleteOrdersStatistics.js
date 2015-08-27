'use strict';

angular.module('mean.shopAdmin').directive('incompleteOrdersStatistics', ['orderService',
    function(orderService) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'shopAdmin/views/dashboard/incomplete-orders-statistics.html',
            link: function(scope, element, attrs) {
                scope.getIncompleteOrdersStatistics = function() {
                    orderService.getIncompleteOrdersStatistics()
                        .$promise
                        .then(function(incompleteOrdersInfo) {
                            scope.incompleteOrdersInfo = incompleteOrdersInfo;
                        });
                };

                scope.getIncompleteOrdersStatistics();
            }
        };
    }
]);