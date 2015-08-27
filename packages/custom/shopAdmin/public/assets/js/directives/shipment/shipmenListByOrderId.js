'use strict';

angular.module('mean.shopAdmin').directive('shipmentListByOrderId', ['$stateParams', 'shipmentService', 'orderService',
    function($stateParams, shipmentService, orderService) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'shopAdmin/views/shipment/shipment-list-by-order-id.html',
            link: function(scope, element, attrs) {

                scope.orderId = $stateParams.orderId;

                shipmentService.getShipmentsByOrderId($stateParams.orderId)
                    .$promise
                    .then(function(shipmentInfo) {
                        scope.shipments = shipmentInfo;
                    });

                scope.showProducts = function(shipment) {
                    scope.shipmentId = shipment._id;
                    shipment.caretDown = !shipment.caretDown;
                };
            }
        };
    }
]);