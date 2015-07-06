(function() {
    'use strict';
    angular.module('mean.shopOrder').controller('orderController',['$scope', '$location', 'orderService',
    function($scope, $location, orderService) {
        var orderId = $location.path().split('/')[2];
        //console.log(orderId);
        $scope.getOrderById = function(orderId) {
            orderService.getOrderById(orderId)
                .$promise
                .then(function(order) {
                    $scope.order = order;
                },
                function(error) {
                    $scope.order = '';
                });
        };

        $scope.getOrderById(orderId);
    }]);
})();