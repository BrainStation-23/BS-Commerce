'use strict';

angular.module('shopAdmin').factory('orderService', ['$resource', '$http',
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
            },
            updateOrder: function(order) {
                var searchRequest = $resource('/api/auth/order', {}, {
                    'put': {method: 'PUT'}
                });
                return searchRequest.put(order);
            },
            getOrdersStatistics: function() {
                var getOrdersStatistics = $resource('/api/auth/orders/statistics', {}, {
                    'get': {method: 'GET', isArray: true}
                });
                return getOrdersStatistics.get({});
            },
            getIncompleteOrdersStatistics: function() {
                var getIncompleteOrdersStatistics = $resource('/api/auth/orders/incomplete/statistics', {}, {
                    'get': {method: 'GET', isArray: true}
                });
                return getIncompleteOrdersStatistics.get({});
            }
        };
    }
]);
