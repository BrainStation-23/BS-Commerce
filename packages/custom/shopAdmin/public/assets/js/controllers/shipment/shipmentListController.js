'use strict';

angular.module('mean.shopAdmin').controller('shipmentListController', ['$scope', '$stateParams', 'shipmentService', '$element',
    function($scope, $stateParams, shipmentService, $element) {

        $scope.numberOfDisplayOptions = [10, 15, 20, 50, 100];
        $scope.numberOfDisplay = 10;
        $scope.maxSize = 4;
        $scope.totalItems = 10;
        $scope.currentPage = 1;
        var yesterday = new Date();
        yesterday.setHours(0,0,0,0);
        yesterday.setDate(yesterday.getDate()-1);
        $scope.searchQuery = {
            startDate: yesterday,
            endDate: new Date()
        };
        $scope.shipments = [];
        $scope.dispalayShipments = [];

        // -----------------start date picker functions ------------------------

        $scope.startDatePickerOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.startDateOpened = true;
        };

        $scope.endDatePickerOpen = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.endDateOpened = true;
        };



        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.resetStartDate = function() {
            $scope.searchQuery.startDate = null;
        };
        $scope.resetEndDate = function() {
            $scope.searchQuery.endDate = null;
        };

        // -----------------start date picker functions ------------------------

        $scope.displayOptionChange = function() {
            var shipmentsLength = $scope.shipments.length;
            if(shipmentsLength > 0) {
                $scope.displayFrom = 1;
                $scope.displayTo = $scope.numberOfDisplay;

                if(shipmentsLength === $scope.numberOfDisplay) {
                    $scope.displayTo = shipmentsLength;
                    $scope.dispalayShipments = $scope.shipments;
                }
                else if((shipmentsLength < $scope.numberOfDisplay) && (shipmentsLength < $scope.totalItems)) {
                    $scope.searchShipments(shipmentsLength, ($scope.numberOfDisplay - shipmentsLength), function() {
                        $scope.displayTo = $scope.shipments.length;
                        $scope.dispalayShipments = $scope.shipments;
                    });
                }
                else if((shipmentsLength < $scope.numberOfDisplay) && (shipmentsLength === $scope.totalItems)) {
                    $scope.displayTo = shipmentsLength;
                    $scope.dispalayShipments = $scope.shipments;
                }
                else if(shipmentsLength > $scope.numberOfDisplay) {
                    $scope.displayTo = $scope.numberOfDisplay;
                    $scope.dispalayShipments = $scope.shipments.slice(0, $scope.numberOfDisplay);
                }
            }
        };

        $scope.defaultSearchShipments = function() {
            if($scope.searchQuery.startDate !== null && $scope.searchQuery.endDate === null) {
                $scope.dateError = 'you should fill up end date';
                return;
            }
            $scope.dateError = '';
            $scope.searchQuery.numberOfSkip =0;
            $scope.searchQuery.numberOfDisplay = $scope.numberOfDisplay;
            shipmentService.searchShipments($scope.searchQuery)
                .$promise
                .then(function(response) {
                    $scope.shipments = response.shipments;
                    $scope.totalItems = response.totalShipments;
                    $scope.dispalayShipments = response.shipments;
                    $scope.displayOptionChange();
                });
        };

        $scope.defaultSearchShipments();

        $scope.searchShipments = function(numberOfSkip, numberOfDisplay, callback) {
            if($scope.searchQuery.startDate !== null && $scope.searchQuery.endDate === null) {
                $scope.dateError = 'you should fill up end date';
                return;
            }
            $scope.searchQuery.numberOfSkip = numberOfSkip;
            $scope.searchQuery.numberOfDisplay = numberOfDisplay;

            shipmentService.searchShipments($scope.searchQuery)
                .$promise
                .then(function(response) {
                    $scope.shipments = $scope.shipments.concat(response.shipments);
                    callback();
                });
        };

        $scope.changePagination =function(pageNo) {
            $scope.displayFrom = (pageNo - 1) * 10 + 1;
            $scope.displayTo = $scope.displayFrom + $scope.numberOfDisplay - 1;

            if($scope.displayTo > $scope.shipments.length)
                $scope.displayTo = $scope.displayFrom + ($scope.shipments.length - $scope.displayFrom);
            $scope.dispalayShipments = $scope.shipments.slice($scope.displayFrom-1, $scope.displayTo);
        };

        $scope.setPage = function (pageNo) {

            if($scope.totalItems > $scope.shipments.length) {
                var numberOfSkip = (pageNo -1) * $scope.numberOfDisplay;
                $scope.searchShipments(numberOfSkip, $scope.numberOfDisplay, function() {
                    $scope.changePagination(pageNo);
                });
            } else {
                $scope.changePagination(pageNo);
            }
            $scope.currentPage = pageNo;
        };

        $scope.showProducts = function(shipment) {
            $scope.shipmentId = shipment._id;
            shipment.caretDown = !shipment.caretDown;
        };

    }
]);