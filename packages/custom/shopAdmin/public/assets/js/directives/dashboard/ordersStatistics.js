'use strict';

angular.module('mean.shopAdmin').directive('ordersStatistics', ['Global', 'orderService',
    function(Global, orderService) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'shopAdmin/views/dashboard/orders-statistics.html',
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