'use strict';

angular.module('mean.shopCatalog').directive('shopProductFeaturedItem', ['Global', 'ShopCatalog', 'ShopProduct', 'cartService',
    function(Global, ShopCatalog, ShopProduct, cartService) {
        return{
            restrict: 'AE',
            replace: true,
            templateUrl: '/shopCatalog/views/product/shop-product-featured-item.html',
            link: function(scope, element, attrs){

                var updateCartStatus = function(){
                    cartService.getCart()
                        .$promise
                        .then(function(cart){
                            _.forEach(scope.products, function(product){
                                var indexInCart = _.findIndex(cart.items, function(item){
                                    return item.product._id === product._id;
                                });

                                product.addedToCart = indexInCart >= 0;
                            });
                        });

                };

                scope.getFeaturedProducts = function() {
                    var query = {
                        isFeatured: true,
                        numberOfDisplay: 20
                    };
                    ShopProduct.getFeaturedProducts(query)
                        .$promise
                        .then(function(promise) {
                            scope.products = promise.products;
                            updateCartStatus();
                        });
                };
                scope.getFeaturedProducts();

                scope.toggleCartStatus = function(product, event){
                    event.preventDefault();
                    product.addedToCart = !(product.addedToCart);

                    if(product.addedToCart) {
                        cartService.addToCart(product, 1);
                    }else{
                        cartService.removeFromCart(product);
                    }

                };
            }
        };
    }
]);
