'use strict';

angular.module('lightweight').factory('OrderService', ['$resource',
    function($resource) {
        return {
            getOrderById: function(orderId) {
                var orderById = $resource('/api/auth/order/:orderId', {orderId:'@orderId'});
                return orderById.get({orderId: orderId});
            },
            updateOrderForPaypalPayment: function(orderId, paymentId, payerId) {
                var updateOrder = $resource('/api/auth/order/:orderId/:paymentId/:payerId', {orderId:'@orderId', paymentId: '@paymentId', payerId: '@payerId'},{
                    'update': {method: 'PUT'}
                });
                return updateOrder.update({orderId: orderId, paymentId: paymentId, payerId: payerId });
            }
        };
    }
]);


