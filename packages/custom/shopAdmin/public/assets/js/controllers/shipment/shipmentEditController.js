'use strict';

angular.module('mean.shopAdmin').controller('shipmentEditController', ['$scope', '$timeout', '$location', '$stateParams', 'orderService', 'shipmentService',
    function($scope, $timeout, $location, $stateParams, orderService, shipmentService) {

        $scope.shipmentId = $stateParams.shipmentId;
        $scope.shippedDate = null;
        $scope.deliveredDate = null;

        $scope.getShipmentById = function() {
            shipmentService.getShipmentById($stateParams.shipmentId)
                .$promise
                .then(function(shipment) {
                    $scope.shipment = shipment;
                    $scope.trackingNumber = shipment.trackingNumber;
                    $scope.adminComment = shipment.adminComment;
                });
        };
        $scope.getShipmentById();

        // -----------------start date picker functions ------------------------

        $scope.shippedDatePickerOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.shippedDateOpened = true;
        };

        $scope.deliveredDatePickerOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.deliveredDateOpened = true;
        };



        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.resetShippedDate = function() {
            $scope.shippedDate = null;
        };
        $scope.resetDeliveredDate = function() {
            $scope.deliveredDate = null;
        };

        // -----------------start date picker functions ------------------------

        $scope.updateShipment = function() {
            //console.log($scope.shipment);
            shipmentService.updateShipment($scope.shipment)
                .$promise
                .then(function(response) {
                    $scope.updateSuccessMsg = response.msg;
                    $timeout(function() {
                        $scope.updateSuccessMsg = '';
                    },1000);
                });
        };

        $scope.setTrackingNumber = function() {
            $scope.shipment.trackingNumber = $scope.trackingNumber;
            $scope.updateShipment();
        };

        $scope.setAdminComment = function() {
            $scope.shipment.adminComment = $scope.adminComment;
            $scope.updateShipment();
        };

        $scope.updateShippedDate = function() {
            console.log($scope.shippedDate);
            $scope.shipment.shippedDate = $scope.shippedDate;
            $scope.updateShipment();
            $scope.showShippedInputBox = false;
        };

        $scope.cancelUpdateShippedDate = function() {
            //$scope.shipment.shippedDate = $scope.updatedShipment.shippedDate;
            $scope.showShippedInputBox = false;
        };

        $scope.updateDeliveredDate = function() {
            $scope.shipment.deliveredDate = $scope.deliveredDate;
            $scope.updateShipment();
            $scope.showDeliveredInputBox = false;
        };

        $scope.cancelUpdateDeliveredDate = function() {
            //$scope.shipment.deliveredDate = $scope.updatedShipment.deliveredDate;
            $scope.showDeliveredInputBox = false;
        };

        $scope.setShippedDate = function() {
            $scope.shipment.shippedDate = new Date();
            $scope.updateShipment();
        };

        $scope.setDeliveredDate = function() {
            $scope.shipment.deliveredDate = new Date();
            $scope.updateShipment();
        };

        $scope.showEditableShippedDate = function() {
            $scope.showShippedInputBox = true;
            $scope.shippedDate = new Date($scope.shipment.shippedDate); //jQuery.extend({}, $scope.shipment.shippedDate);
            console.log($scope.shippedDate);
        };

        $scope.showEditableDeliveredDate = function() {
            $scope.showDeliveredInputBox = true;
            $scope.deliveredDate = new Date($scope.shipment.deliveredDate);
        };

        $scope.printPackagingSlip = function() {
            var doc = new window.jsPDF();
            doc.text(20, 20, $scope.shipment._id);
            doc.text(80,80,'another text');
            doc.save('Test.pdf');
        };
    }
]);