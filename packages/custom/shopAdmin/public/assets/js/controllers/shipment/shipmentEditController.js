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
        var productTableFromHTML = {
            '#editor': function(element, renderer){
                return true;
            }
        };

        $scope.printPackagingSlip = function() {
            var doc = new window.jsPDF();

            doc.setFont('helvetica');
            doc.setFontType('bold');
            doc.setFontSize(24);
            doc.setTextColor(46, 116, 181);
            doc.text(55, 30,  'Thank you for shipping from');
            doc.text(80, 40,  'BS-Commerce');

            doc.setFont('courier');
            doc.setFontSize(12);
            doc.setTextColor(0,0,0);
            doc.text(20, 50,  'Shipping ID:');
            doc.setFontType('normal');
            doc.text(45, 50,  $scope.shipment._id);
            doc.setFontType('bold');
            doc.text(110, 50,  'Order ID:');
            doc.setFontType('normal');
            doc.text(130, 50,  $scope.shipment.order._id);

            doc.setFontType('bold');
            doc.text(20, 60,  'Shipping Address:');
            doc.setFontType('normal');
            doc.text(30, 70,  'Name');
            doc.text(70, 70,  ': '+$scope.shipment.order.shippingAddress.name);
            doc.text(30, 76,  'Address Line 1');
            doc.text(70, 76,  ': '+$scope.shipment.order.shippingAddress.addressLine1);
            doc.text(30, 82,  'Address Line 2');
            doc.text(70, 82,  ': '+$scope.shipment.order.shippingAddress.addressLine2);
            doc.text(30, 88,  'Email');
            doc.text(70, 88,  ': '+$scope.shipment.order.shippingAddress.email);
            doc.text(30, 94,  'Phone Number');
            doc.text(70, 94,  ': '+$scope.shipment.order.shippingAddress.phoneNumber);
            doc.text(30, 100,  'Post code');
            doc.text(70, 100,  ': '+$scope.shipment.order.shippingAddress.postCode);
            doc.text(30, 106,  'City');
            doc.text(70, 106,  ': '+$scope.shipment.order.shippingAddress.city);
            doc.text(30, 112,  'Country');
            doc.text(70, 112,  ': '+$scope.shipment.order.shippingAddress.country);

            doc.setFontType('bold');
            doc.text(20, 120,  'Shipping Method');
            doc.text(60, 120,  ': '+$scope.shipment.order.shippingMethod);

            doc.text(20, 130,  'Product Information:');
            doc.fromHTML($('#productTable').get(0), 30, 130, {
                'elementHandlers': productTableFromHTML
            });
            doc.autoPrint();
            doc.output('dataurlnewwindow');
            //doc.save('ShippingInfo.pdf');
        };
    }
]);