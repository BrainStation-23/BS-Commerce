'use strict';

angular.module('shopAdmin').controller('orderEditController', ['$scope', '$window', '$location', '$stateParams', '$timeout', 'orderService',
    function($scope, $window, $location,  $stateParams, $timeout, orderService) {

        var orderId = $stateParams.orderId;

        $scope.order = {};
        $scope.showEditBillingAddressForm = false;
        $scope.billAddressFieldRequired = true;

        $scope.showEditShippingAddressForm = false;
        $scope.shippingAddressFieldRequired = true;

        orderService.getOrderEnums()
            .$promise
            .then(function(response) {
                $scope.orderStatus = response.orderStatus;
                $scope.shippingStatus = response.shippingStatus;
                $scope.paymentStatus = response.paymentStatus;
            });

        orderService.getOrderById(orderId)
            .$promise
            .then(function(order) {
                $scope.order = order;
                angular.forEach(order.products, function(orderProduct) {
                    if(orderProduct.quantity > orderProduct.quantityShipped) {
                        $scope.addShipmentAvailable = true;
                    }
                });
            });

        $scope.changeOrderStatus = function() {
            $scope.editOrderStatus = true;
        };

        $scope.cancelUpdateOrderStatus = function() {
            $scope.editOrderStatus = false;
        };

        $scope.updateOrderStatus = function(orderStatus) {
            if(orderStatus === '' || orderStatus === undefined) {
                alert('please select order status !');
                return;
            }
            if(confirm('Are you sure want to change order status ?')) {
                $scope.updateOrder = {
                    _id: $scope.order._id,
                    orderStatus: orderStatus
                };
                orderService.updateOrder($scope.updateOrder)
                    .$promise
                    .then(function(response) {
                        $scope.order.orderStatus = orderStatus;
                        $timeout(function() {
                            $scope.editOrderStatus = false;
                        },1000);
                        $window.toastr.success(response.msg);
                    });
            }
        };

        $scope.changePaymentStatus = function() {
            $scope.editPaymentStatus = true;
        };

        $scope.cancelUpdatePaymentStatus = function() {

            $scope.editPaymentStatus = false;
        };

        $scope.updatePaymentStatus = function(paymentStatus) {
            if(paymentStatus === '' || paymentStatus === undefined) {
                alert('please select payment status !');
                return;
            }
            if(confirm('Are you sure want to change payment status ?')) {
                $scope.updateOrder = {
                    _id: $scope.order._id,
                    paymentStatus: paymentStatus
                };
                orderService.updateOrder($scope.updateOrder)
                    .$promise
                    .then(function(response) {
                        $scope.order.paymentStatus = paymentStatus;
                        $timeout(function() {
                            $scope.editPaymentStatus = false;
                        },1000);
                        $window.toastr.success(response.msg);
                    });
            }
        };

        $scope.changeShippingStatus = function() {
            $scope.editShippingStatus = true;
        };

        $scope.cancelUpdateShippingStatus = function() {
            $scope.editShippingStatus = false;
        };

        $scope.updateShippingStatus = function(shippingStatus) {
            if(shippingStatus === '' || shippingStatus === undefined) {
                alert('please select shipping status !');
                return;
            }
            if(confirm('Are you sure want to change shipping status ?')) {
                $scope.updateOrder = {
                    _id: $scope.order._id,
                    shippingStatus: shippingStatus
                };
                orderService.updateOrder($scope.updateOrder)
                    .$promise
                    .then(function(response) {
                        $scope.order.shippingStatus = shippingStatus;
                        $timeout(function() {
                            $scope.editShippingStatus = false;
                        },1000);
                        $window.toastr.success(response.msg);
                    });
            }
        };

        $scope.editBillingAddress = function() {
            $scope.billAddressFieldRequired = true;
            $scope.showEditBillingAddressForm = true;
            $scope.newBillingAddress = angular.copy($scope.order.billingAddress); //jQuery.extend
        };

        $scope.cancelUpdateBillingAddress = function() {
            $scope.billAddressFieldRequired = false;
            $scope.showEditBillingAddressForm = false;
            $scope.newBillingAddress = {};
        };

        $scope.updateBillingAddress = function() {

            if(confirm('Are you sure want to change billing address ?')) {
                //$scope.order.billingAddress = $scope.newBillingAddress;
                $scope.updateOrder = {
                    _id: $scope.order._id,
                    billingAddress: $scope.newBillingAddress
                };
                orderService.updateOrder($scope.updateOrder)
                    .$promise
                    .then(function(response) {
                        $scope.order.billingAddress = $scope.newBillingAddress;
                        $timeout(function() {
                            $scope.billAddressFieldRequired = false;
                            $scope.showEditBillingAddressForm = false;
                        },1000);
                        $window.toastr.success(response.msg);
                    });
            }
        };

        $scope.editShippingAddress = function() {
            $scope.shippingAddressFieldRequired = true;
            $scope.showEditShippingAddressForm = true;
            $scope.newShippingAddress = angular.copy($scope.order.shippingAddress);//previous jQuery.extend({}, source)
        };

        $scope.cancelUpdateShippingAddress = function() {
            $scope.shippingAddressFieldRequired = false;
            $scope.showEditShippingAddressForm = false;
            $scope.newShippingAddress = {};
        };

        $scope.updateShippingAddress = function() {

            if(confirm('Are you sure want to change shipping address ?')) {
                //$scope.order.billingAddress = $scope.newBillingAddress;
                $scope.updateOrder = {
                    _id: $scope.order._id,
                    shippingAddress: $scope.newShippingAddress
                };
                orderService.updateOrder($scope.updateOrder)
                    .$promise
                    .then(function(response) {
                        $scope.order.shippingAddress = $scope.newShippingAddress;
                        $timeout(function() {
                            $scope.shippingAddressFieldRequired = false;
                            $scope.showEditShippingAddressForm = false;
                        },1000);
                        $window.toastr.success(response.msg);
                    });
            }
        };

        $scope.editProductInfo = function(item) {
            $scope.newItem = angular.copy(item);////previous jQuery.extend({}, source)
            $scope.editQuantity = true;
            //console.log(item);
        };

        $scope.increaseQuantity = function(newItem) {
            newItem.quantity+= 1;
        };

        $scope.decreaseQuantity = function(newItem) {
            if(newItem.quantity < 1) {
                return;
            }
            newItem.quantity-= 1;
        };

        $scope.cancelUpdateProductInfo = function() {
            $scope.newItem = {};
        };

        $scope.saveProductInfo = function(newProductCost) {
            var updateOrder = {
                _id: $scope.order._id,
                productCost: newProductCost,
                totalCost: newProductCost + $scope.order.shippingCost,
                products: $scope.order.products
            };

            orderService.updateOrder(updateOrder)
                .$promise
                .then(function(response) {
                    $timeout(function() {
                        $scope.order.productCost = newProductCost;
                        $scope.order.totalCost = newProductCost + $scope.order.shippingCost;
                    },1000);
                    $window.toastr.success(response.msg);
                });
        };

        $scope.updateProductInfo = function(newItem) {
            if(newItem === null) {
                alert('new item is empty!');
                return;
            }
            if(confirm('Are you sure want to update product information?')) {
                var productIndex = -1;
                var newProductCost =0;
                angular.forEach($scope.order.products, function(product) {
                    productIndex+=1;
                    newProductCost+= product.price * product.quantity;
                    if(product._id === newItem._id) {
                        newProductCost-= product.price * product.quantity;
                        newProductCost+= newItem.price * newItem.quantity;
                        $scope.order.products[productIndex] = newItem;
                    }
                });
                $scope.newItem = {};
                if(productIndex+1 === $scope.order.products.length) {
                    $scope.saveProductInfo(newProductCost);
                }
            }
        };
    }
]);
