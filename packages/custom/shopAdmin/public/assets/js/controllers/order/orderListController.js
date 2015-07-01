'use strict';

angular.module('mean.shopAdmin').controller('orderListController', ['$scope', 'orderService',
    function($scope, orderService) {

        $scope.numberOfDisplayOptions = [10, 15, 20, 50, 100];
        $scope.numberOfDisplay = 10;
        $scope.maxSize = 4;
        $scope.bigTotalItems = 10;
        $scope.bigCurrentPage = 1;

        $scope.searchQuery = {};
        $scope.orders = [];

        orderService.getOrderEnums()
            .$promise
            .then(function(response) {
                $scope.orderStatus = response.orderStatus;
                $scope.shippingStatus = response.shippingStatus;
                $scope.paymentStatus = response.paymentStatus;
            });

        $scope.searchOrders = function() {
            //console.log($scope.searchQuery);
            orderService.searchOrders($scope.searchQuery)
                .$promise
                .then(function(promise) {
                   console.log('search');
                });
        };
    }
]);