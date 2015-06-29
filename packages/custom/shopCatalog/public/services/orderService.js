(function(_){
    'use strict';

    angular.module('mean.shopCatalog').factory('orderService', ['$rootScope','Global', 'Cart', '$resource',
        function($rootScope, Global, Cart, $resource) {
            return {
                getOrderById: function(orderId) {
                    var orderById = $resource('/api/auth/order/:orderId', {orderId:'@orderId'});
                    return orderById.get({orderId: orderId});
                }
            };
        }
    ]);
})(_);


