(function() {
    'use strict';
    angular.module('mean.shopOrder').controller('orderController',['$scope', '$location', '$stateParams', 'orderService',
    function($scope, $location, $stateParams, orderService) {
        var orderId = $stateParams.orderId;
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