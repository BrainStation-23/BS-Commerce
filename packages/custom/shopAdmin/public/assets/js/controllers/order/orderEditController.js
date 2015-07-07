'use strict';

angular.module('mean.shopAdmin').controller('orderEditController', ['$scope', '$location',
    function($scope, $location) {
        //var orderId = $location.path().split('/')[3];


        $scope.changeOrderStatus = function() {
            $scope.editOrderStatus = true;
        };

        $scope.cancelUpdateOrderStatus = function() {
            console.log('hsdfj');
            $scope.editOrderStatus = false;
        };
    }
]);