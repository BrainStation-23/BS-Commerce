'use strict';

angular.module('lightweight').directive('miniCart', ['$rootScope', 'Global', '_', 'CartService',
    function ($rootScope, Global, _, CartService) {
        return {
            replace: true,
            restrict: 'AE',
            templateUrl: 'themes/lightweight/views/cart/mini-cart.html',
            link: function (scope, element, attrs) {
                scope.subTotal = 0;
                scope.items = [];
                $rootScope.totalCartItems = 0;

                var updateCart = function () {
                    CartService.getCart()
                        .$promise
                        .then(function (cart) {
                            scope.items = cart.items;
                            var subTotal = 0;

                            _.forEach(scope.items, function (item) {
                                subTotal += (item.product.info.price * item.quantity);
                                $rootScope.totalCartItems += item.quantity;
                            });

                            scope.subTotal = subTotal;
                        });
                };

                $rootScope.$on('cart:updated', function () {
                    $rootScope.totalCartItems = 0;
                    updateCart();
                });

                updateCart();
            }
        };
    }
]);
