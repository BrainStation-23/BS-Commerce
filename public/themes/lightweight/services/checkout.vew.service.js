'use strict';

angular.module('lightweight').factory('CheckoutService', ['$rootScope', 'Global', '_', '$resource',
    function ($rootScope, Global, _, $resource) {
        return {
            createOrder: function (order) {
                var addOrder = $resource('/api/auth/order', {}, {
                    'create': {method: 'POST'}
                });
                return addOrder.create(order);
            }
        };
    }
]);


