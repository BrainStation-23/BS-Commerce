'use strict';

angular.module('mean.shopCatalog').directive('shopProductFeaturedItem', ['Global', 'ShopCatalog',
    function(Global, ShopCatalog) {
        return{
            replace: true,
            scope:{
                featuredItemSrc:'@',
                cornerImage:'@'
            },
            templateUrl: '/shopCatalog/views/product/shop-product-featured-item.html',
            link: function(scope, element, attrs){

            }
        };
    }
]);
