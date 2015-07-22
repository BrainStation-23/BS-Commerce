'use strict';

angular.module('mean.shopAdmin').directive('incompleteOrders', ['orderService',
    function(orderService) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'shopAdmin/views/dashboard/incomplete-orders.html',
            link: function(scope, element, attrs) {
                //console.log('get incomplete orders controller');
            }
        };
    }
]);