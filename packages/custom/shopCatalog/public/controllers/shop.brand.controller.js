'use strict';

angular.module('mean.shopCatalog').controller('ShopBrandController', ['$scope', '$timeout', '$stateParams', 'Global', 'shopBrandService', 'cartService',
    function ($scope, $timeout, $stateParams, Global, shopBrandService, cartService) {

        var updateCartStatus = function () {
            cartService.getCart()
                .$promise
                .then(function (cart) {
                    _.forEach($scope.products, function (product) {
                        var indexInCart = _.findIndex(cart.items, function (item) {
                            return item.product._id === product._id;
                        });

                        product.addedToCart = indexInCart >= 0;
                    });
                });

        };

        $scope.getProductByBrand = function () {
            shopBrandService.getProductByBrand($stateParams.id)
                .$promise
                .then(function (response) {
                    $scope.products = response.products;
                    updateCartStatus();
                });
        };
        $scope.getProductByBrand();

        $scope.toggleCartStatus = function (product, event) {
            if (!Global.authenticated) {
                product.notAuthenticate = true;
                $timeout(function () {
                    product.notAuthenticate = false;
                }, 1000);
                return;
            }
            event.preventDefault();
            product.addedToCart = !(product.addedToCart);

            if (product.addedToCart) {
                cartService.addToCart(product, 1);
            } else {
                cartService.removeFromCart(product);
            }

        };
    }
]);