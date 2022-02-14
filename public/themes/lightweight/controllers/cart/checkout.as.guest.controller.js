'use strict';

angular.module('lightweight').controller('CheckoutAsGuestController',
    ['$scope', '$rootScope', '$location', '$state', '$timeout', '$stateParams', '$window', 'Global', 'UserService','CartService',
    function($scope, $rootScope, $location, $state, $timeout, $stateParams, $window, Global, UserService, CartService) {
        $scope.global = Global;
        var returnState = $stateParams.returnUrl;
        $scope.userCredential = {};
        $scope.items = [];

        CartService.getItemsWithoutPopulate()
            .$promise
            .then(function (items) {
                $scope.items = items;
            });

        $scope.loginFromCheckout = function() {
            if($scope.items && $scope.items.length) {
                $scope.user.items = $scope.items;
                UserService.signInUserWithGuestUserItems($scope.user)
                    .$promise
                    .then(function(user) {

                        $rootScope.$emit('cart:updated');

                        $timeout(function() {
                            $scope.global.user = user;
                            $scope.global.isRegistered = true;
                            $state.go(returnState);
                        });

                    }, function(error) {
                        $scope.errorLogin = error.data.message;
                    });
            }

        };

        $scope.checkoutAsGuest = function() {
            $state.go(returnState);
        };
    }
]);
