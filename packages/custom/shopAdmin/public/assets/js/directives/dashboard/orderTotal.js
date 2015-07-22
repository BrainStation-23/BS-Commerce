'use strict';

angular.module('mean.shopAdmin').directive('orderTotal', ['Global', 'orderService',
    function(Global, orderService) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'shopAdmin/views/dashboard/order-totals.html',
            link: function(scope, element, attrs) {

                scope.getOrderTotal = function() {
                    orderService.getOrderTotalsInfo()
                        .$promise
                        .then(function(orderInfos) {
                            scope.orderInfos = orderInfos;
                        });
                };
                scope.getOrderTotal();
            }
        };
    }
]);