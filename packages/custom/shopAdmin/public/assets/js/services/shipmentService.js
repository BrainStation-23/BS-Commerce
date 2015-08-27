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
            },
            getShipmentById: function(shipmentId) {
                var getShipmentById = $resource('/api/auth/shipment/:shipmentId', {shipmentId: '@shipmentId'}, {
                    'get': {method: 'GET'}
                });
                return getShipmentById.get({shipmentId: shipmentId});
            },
            updateShipment: function(shipment) {
                var updateShipment = $resource('/api/auth/shipment', {}, {
                    'update': {method: 'PUT'}
                });
                return updateShipment.update(shipment);
            },
            searchShipments: function(query) {
                var searchRequest = $resource('/api/auth/shipment', {}, {
                    'get': {method: 'GET'}
                });
                return searchRequest.get(query);
            }
        };
    }
]);