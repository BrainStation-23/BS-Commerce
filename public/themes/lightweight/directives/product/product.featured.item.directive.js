'use strict';

angular.module('lightweight').directive('productFeaturedItem',
    ['$rootScope','$timeout', '$window', 'Global', 'ProductService','UserService','CartService', 'WishlistService', 'CompareService',
    function($rootScope, $timeout, $window, Global, ProductService, UserService, CartService, WishlistService, CompareService) {
        return{
            restrict: 'AE',
            replace: true,
            templateUrl: 'themes/lightweight/views/product/product-featured-item.html',
            link: function(scope, element, attrs){

                scope.global = Global;

                scope.getFeaturedProducts = function() {
                    var query = {
                        isFeatured: true,
                        numberOfDisplay: 20
                    };
                    ProductService.getFeaturedProducts(query)
                        .$promise
                        .then(function(promise) {
                            scope.products = promise.products;
                        });
                };
                scope.getFeaturedProducts();

                scope.addToCart = function(product, event){

                    var item = {product:product._id, quantity: 1};

                    if(!scope.global.authenticated) {
                        UserService.createGuestUser().$promise.then(function(user) {
                            CartService.addToCart({item: item}).$promise.then(function(cartResponse) {
                                scope.global.user = user;
                                $window.location.reload();
                                $rootScope.$emit('cart:updated');
                                $window.toastr.success('Added to cart');
                            });
                        });
                    } else {
                        CartService.addToCart({item: item}).$promise.then(function(data) {
                            $rootScope.$emit('cart:updated');
                            $window.toastr.success('Added to cart');
                        });
                    }
                    event.preventDefault();

                };

                scope.addToWishlist = function(product, event){
                    event.preventDefault();
                    var item = {product:product._id, quantity: 1};

                    if(!scope.global.authenticated) {

                        UserService.createGuestUser().$promise.then(function(user) {
                            WishlistService.addToWishlist({item: item}).$promise.then(function(wishlistResponse) {
                                scope.global.user = user;
                                $rootScope.$emit('wishlist:updated');
                                $window.toastr.success('Added to wishlist');
                                $window.location.reload();
                            });
                        });
                    } else {
                        WishlistService.addToWishlist({item: item}).$promise.then(function(data) {
                            //console.log(data);
                            $rootScope.$emit('wishlist:updated');
                            $window.toastr.success('Added to wishlist');

                        }, function(error) {
                            $window.toastr.error('Failed to add to wishlist');
                        });
                    }
                };

                scope.addToCompare = function(product, event){
                    event.preventDefault();
                    var item = {product:product._id};

                    if(!scope.global.authenticated) {

                        UserService.createGuestUser().$promise.then(function(user) {
                            CompareService.addToCompare({item: item}).$promise.then(function(compareResponse) {
                                scope.global.user = user;
                                $window.toastr.success('Added to compare list');
                                $window.location.reload();
                            });
                        });
                    } else {
                        CompareService.addToCompare({item: item}).$promise.then(function(data) {
                            $window.toastr.success('Added to compare list');
                        });
                    }
                };

            }
        };
    }
]);
