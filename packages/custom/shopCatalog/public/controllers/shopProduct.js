'use strict';

angular.module('mean.shopCatalog').controller('ShopProductController', ['$scope', '$timeout', '$state', 'Global', 'ShopProduct', 'cartService',
    function($scope, $timeout, $state, Global, ShopProduct, cartService) {
        $scope.global = Global;
        var sku = $state.params.sku;

        $scope.product = null;
        $scope.quantity = 1;
        $scope.slides = [];

        ShopProduct.getProductById(sku)
            .$promise
            .then(function(product) {
                console.log(product);
                $scope.product = product;
                $scope.slides = _.map(product.photos, function(photo){
                    return {
                        image: '/api/products/photos/' + photo
                    };
                });
                cartService.getCart()
                    .$promise
                    .then(function(cart){
                        var indexInCart = _.findIndex(cart.items, function(item){
                            return item.product._id === product._id;
                        });

                        product.addedToCart = indexInCart >= 0;
                    });

            });

        $scope.toggleCartStatus = function(product, event){

            if(!Global.authenticated) {
                product.notAuthenticate = true;
                $timeout(function() {
                    product.notAuthenticate = false;
                },1000);
                return;
            }
            event.preventDefault();
            product.addedToCart = !(product.addedToCart);

            if(product.addedToCart) {
                cartService.addToCart(product, $scope.quantity);
            }else{
                cartService.removeFromCart(product);
            }

        };
    }
]);
