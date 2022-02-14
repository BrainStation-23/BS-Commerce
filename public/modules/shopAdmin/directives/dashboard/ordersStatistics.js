'use strict';

angular.module('shopAdmin').directive('ordersStatistics', ['orderService',
    function(orderService) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'modules/shopAdmin/views/dashboard/orders-statistics.html',
            link: function(scope, element, attrs) {

                scope.getOrdersStatistics = function() {
                    orderService.getOrdersStatistics()
                        .$promise
                        .then(function(ordersInfo) {
                            scope.ordersInfo = ordersInfo;
                        });
                };
                scope.getOrdersStatistics();
            }
        };
    }
]);
