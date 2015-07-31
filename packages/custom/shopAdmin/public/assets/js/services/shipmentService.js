'use strict';

angular.module('mean.shopAdmin').factory('shipmentService', ['$resource', '$http',
    function($resource, $http) {
        return {
            createShipment: function(shipmentInfo) {
                var createShipment = $resource('/api/auth/shipment', {}, {
                    'create': {method: 'POST'}
                });
                return createShipment.create(shipmentInfo);
            },
            getShipmentsByOrderId: function(orderId) {
                var getShipmentsByOrderId = $resource('/api/auth/shipmentByOrderId/:orderId', {orderId: '@orderId'}, {
                    'get': {method: 'GET', isArray: true}
                });
                return getShipmentsByOrderId.get({orderId: orderId});
            }
        };
    }
]);