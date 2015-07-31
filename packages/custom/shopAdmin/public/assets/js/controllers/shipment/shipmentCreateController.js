'use strict';

angular.module('mean.shopAdmin').controller('shipmentCreateController', ['$scope', '$timeout', '$location', '$stateParams', 'orderService', 'shipmentService',
    function($scope, $timeout, $location, $stateParams, orderService, shipmentService) {

        $scope.orderId = $stateParams.orderId;
        $scope.shipmentAbleProducts = [];

        var generateShipmentAbleProducts = function(orderProducts) {
            angular.forEach(orderProducts, function(orderProduct) {
                if(orderProduct.quantity > orderProduct.quantityShipped) {
                    var newShipmentAbleProduct = {
                        productId: orderProduct.productId._id,
                        name: orderProduct.name,
                        sku: orderProduct.sku,
                        quantity: orderProduct.quantity,
                        shippedQuantity: orderProduct.quantityShipped,
                        quantityShipped: orderProduct.quantity - orderProduct.quantityShipped,
                        maxToShip: orderProduct.quantity - orderProduct.quantityShipped
                    };
                    $scope.shipmentAbleProducts.push(newShipmentAbleProduct);
                }
            });
        };

        $scope.getOrderProductsByOrderId = function() {
            orderService.getOrderById($stateParams.orderId)
                .$promise
                .then(function(order) {
                    generateShipmentAbleProducts(order.products);
                });
        };
        $scope.getOrderProductsByOrderId();

        $scope.addShipment = function() {
            var orderShipmentInfo = {
                orderId: $scope.orderId,
                trackingNumber: $scope.trackingNumber,
                adminComment: $scope.adminComment,
                products: $scope.shipmentAbleProducts
            };

            shipmentService.createShipment(orderShipmentInfo)
                .$promise
                .then(function(promise) {
                    $location.path('/Order/Edit/'+$stateParams.orderId);
                });
        };
    }
]);