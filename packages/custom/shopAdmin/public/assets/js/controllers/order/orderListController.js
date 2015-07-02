'use strict';

angular.module('mean.shopAdmin').controller('orderListController', ['$scope', 'orderService',
    function($scope, orderService) {

        $scope.numberOfDisplayOptions = [10, 15, 20, 50, 100];
        $scope.numberOfDisplay = 10;
        $scope.maxSize = 4;
        $scope.totalItems = 10;
        $scope.currentPage = 1;
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate()-1);
        $scope.searchQuery = {
            startDate: yesterday,
            endDate: new Date()
        };
        $scope.orders = [];
        $scope.dispalayOrders = [];

        orderService.getOrderEnums()
            .$promise
            .then(function(response) {
                $scope.orderStatus = response.orderStatus;
                $scope.shippingStatus = response.shippingStatus;
                $scope.paymentStatus = response.paymentStatus;
            });

        $scope.displayOptionChange = function() {

            if($scope.orders.length > 0) {
                $scope.displayFrom = 1;
                $scope.displayTo = $scope.numberOfDisplay;

                if($scope.orders.length <= $scope.numberOfDisplay) {
                    $scope.displayTo = $scope.orders.length;

                    if($scope.dispalayOrders.length !== $scope.orders.length)
                        $scope.dispalayOrders = $scope.orders;
                }
                else if($scope.orders.length > $scope.numberOfDisplay) {
                    $scope.displayTo = $scope.numberOfDisplay;
                    $scope.dispalayOrders = $scope.orders.slice(0, $scope.numberOfDisplay);
                }
            }
        };

        $scope.searchOrders = function() {
            //console.log($scope.searchQuery);
            if($scope.searchQuery.startDate !== null && $scope.searchQuery.endDate === null) {
                console.log('dfsd');
                $scope.dateError = 'you should fill up end date';
                return;
            }
            orderService.searchOrders($scope.searchQuery)
                .$promise
                .then(function(orders) {
                    $scope.orders = orders;
                    $scope.totalItems = orders.length;
                    $scope.dispalayOrders = orders;

                    if(orders.length > $scope.numberOfDisplay) {
                        $scope.dispalayOrders = $scope.orders.slice(0, $scope.numberOfDisplay);
                    }
                    $scope.displayOptionChange();
                });
        };

        $scope.searchOrders();

        $scope.changePagination =function(pageNo) {
            $scope.displayFrom = (pageNo - 1) * 10 + 1;
            $scope.displayTo = $scope.displayFrom + $scope.numberOfDisplay - 1;

            if($scope.displayTo > $scope.orders.length)
                $scope.displayTo = $scope.displayFrom + ($scope.orders.length - $scope.displayFrom);
            $scope.dispalayOrders = $scope.orders.slice($scope.displayFrom-1, $scope.displayTo);
        };

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
            $scope.changePagination(pageNo);
        };

    }
]);