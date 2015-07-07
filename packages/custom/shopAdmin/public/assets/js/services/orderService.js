'use strict';

angular.module('mean.shopAdmin').factory('orderService', ['$resource', '$http',
    function($resource, $http) {
        return {
            getOrderEnums: function() {
              var ordersEnums = $resource('/api/auth/orders/enums', {});
              return ordersEnums.get({});
            },
            searchOrders: function(query) {
                var searchRequest = $resource('/api/auth/order', {}, {
                    'get': {method: 'GET'}
                });
                return searchRequest.get(query);
            },
            getOrderById: function(orderId) {
                var searchRequest = $resource('/api/auth/order/:orderId', {orderId: '@orderId'}, {
                    'get': {method: 'GET'}
                });
                return searchRequest.get({orderId: orderId});
            }
        };
    }
]);