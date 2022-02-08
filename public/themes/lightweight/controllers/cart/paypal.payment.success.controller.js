'use strict';
angular.module('lightweight').controller('PaypalPaymentSuccessController',
    ['$scope', '$rootScope', '$location', '$state', 'Global', '$stateParams', '$timeout','$window', 'OrderService',
        function($scope, $rootScope, $location, $state, Global, $stateParams, $timeout, $window, OrderService) {

            $scope.orderId = $stateParams.orderId;

            $scope.paymentId = $stateParams.paymentId;
            $scope.token = $stateParams.token;
            $scope.PayerID = $stateParams.PayerID;

            $scope.confirmPayment = function() {
                OrderService.updateOrderForPaypalPayment($scope.orderId,$scope.paymentId, $scope.PayerID)
                    .$promise
                    .then(function(response) {
                        $state.go('CheckoutSuccess',{orderId: response.orderId});
                    }, function(error) {
                        console.log('error', error);
                    });
            };
        }
    ]);
