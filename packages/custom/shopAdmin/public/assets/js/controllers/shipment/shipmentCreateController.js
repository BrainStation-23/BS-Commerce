'use strict';

angular.module('mean.shopAdmin').controller('shipmentCreateController', ['$scope', '$timeout', '$location', '$stateParams', 'orderService', 'shipmentService',
    function($scope, $timeout, $location, $stateParams, orderService, shipmentService) {

        $scope.orderId = $stateParams.orderId;
        $scope.shipmentAbleProducts = [];
        $scope.order ={};

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
                    $scope.order = order;
                    generateShipmentAbleProducts(order.products);
                });
        };
        $scope.getOrderProductsByOrderId();

        var updateOrderedProduct = function(updateProduct, callback) {
            var productCount =0;
            angular.forEach($scope.order.products, function(product) {
                productCount += 1;
                if(updateProduct.productId === product.productId._id) {
                    product.quantityShipped += updateProduct.quantityShipped;
                }
            });

            if(productCount === $scope.order.products.length) {
                callback();
            }
        };

        var filterShipmentAbleProducts = function(shipmentAbleProducts, callback) {
            var productCount =0;
            var ProductsToShip = [];
            angular.forEach(shipmentAbleProducts, function(shipmentAbleProduct) {
                productCount += 1;
                if(shipmentAbleProduct.quantityShipped > 0) {
                    updateOrderedProduct(shipmentAbleProduct, function() {
                        ProductsToShip.push(shipmentAbleProduct);
                    });
                }
            });
            if(productCount === shipmentAbleProducts.length) {
                callback(ProductsToShip);
            }
        };

        $scope.addShipment = function() {

            filterShipmentAbleProducts($scope.shipmentAbleProducts, function(ProductsToShip) {
                var orderShipmentInfo = {
                    order: $scope.orderId,
                    trackingNumber: $scope.trackingNumber,
                    adminComment: $scope.adminComment,
                    products: ProductsToShip
                };

                var updateOrder = {
                    _id: $scope.orderId,
                    products: $scope.order.products
                };

                if(orderShipmentInfo.products.length < 1) {
                    alert('To add shipment need minimum one shipment able product');
                    return;
                }
                shipmentService.createShipment(orderShipmentInfo)
                    .$promise
                    .then(function(promise) {
                        orderService.updateOrder(updateOrder)
                            .$promise
                            .then(function(response) {
                                $location.path('/Order/Edit/'+$stateParams.orderId);
                            });
                    });
            });
        };
    }
]);