'use strict';

angular.module('mean.shopAdmin').directive('orderTotal', ['Global', 'orderService',
    function(Global, orderService) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'shopAdmin/views/dashboard/order-totals.html',
            link: function(scope, element, attrs) {
                console.log('get order total controller');
                scope.getOrderTotal = function() {
                    orderService.getOrderEnums();
                };
            }
        };
    }
]);