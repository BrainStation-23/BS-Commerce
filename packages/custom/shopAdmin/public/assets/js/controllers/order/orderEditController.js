'use strict';

angular.module('mean.shopAdmin').controller('orderEditController', ['$scope', '$location', '$stateParams', 'orderService',
    function($scope, $location,  $stateParams, orderService) {

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
            });

        $scope.changeOrderStatus = function() {
            $scope.editOrderStatus = true;
        };

        $scope.cancelUpdateOrderStatus = function() {
            console.log('hsdfj');
            $scope.editOrderStatus = false;
        };

        $scope.updateOrderStatus = function() {
            console.log('hsdfj');
        };

        $scope.changePaymentStatus = function() {
            $scope.editPaymentStatus = true;
        };

        $scope.cancelUpdatePaymentStatus = function() {

            $scope.editPaymentStatus = false;
        };

        $scope.updatePaymentStatus = function() {
            console.log('kjk');
        };

        $scope.changeShippingStatus = function() {
            $scope.editShippingStatus = true;
        };

        $scope.cancelUpdateShippingStatus = function() {
            console.log('hsdfj');
            $scope.editShippingStatus = false;
        };

        $scope.updateShippingStatus = function() {
            console.log('hsdfj');
        };

        $scope.editBillingAddress = function() {
            $scope.billAddressFieldRequired = true;
            $scope.showEditBillingAddressForm = true;
            $scope.newBillingAddress = jQuery.extend({}, $scope.order.billingAddress);
        };

        $scope.cancelUpdateBillingAddress = function() {
            $scope.billAddressFieldRequired = false;
            $scope.showEditBillingAddressForm = false;
            $scope.newBillingAddress = {};
        };

        $scope.updateBillingAddress = function() {
            $scope.order.billingAddress = $scope.newBillingAddress;
            $scope.billAddressFieldRequired = false;
            $scope.showEditBillingAddressForm = false;
        };

        $scope.editShippingAddress = function() {
            $scope.shippingAddressFieldRequired = true;
            $scope.showEditShippingAddressForm = true;
            $scope.newShippingAddress = jQuery.extend({}, $scope.order.shippingAddress);
        };

        $scope.cancelUpdateShippingAddress = function() {
            $scope.shippingAddressFieldRequired = false;
            $scope.showEditShippingAddressForm = false;
            $scope.newShippingAddress = {};
        };

        $scope.updateShippingAddress = function() {
            $scope.shippingAddressFieldRequired = false;
            $scope.showEditShippingAddressForm = false;
            $scope.order.shippingAddress = $scope.newShippingAddress;
        };
    }
]);