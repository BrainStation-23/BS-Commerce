'use strict';

angular.module('mean.shopProduct').directive('shopProductFeaturedItem', ['Global', 'ShopProduct',
    function(Global, ShopProduct) {
        return{
            replace: true,
            scope:{
                featuredItemSrc:"@",
                cornerImage:"@"
            },
            templateUrl: '/shopProduct/views/shop-product-featured-item.html',
            link: function(scope, element, attrs){

            }
        };
    }
]);
