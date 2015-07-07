'use strict';

angular.module('mean.shopCatalog').directive('shopProductRecommendedItem', ['Global', 'ShopCatalog',
    function(Global, ShopCatalog) {
        return{
            replace: true,
            scope:{
                imageSrc:'@'
            },
            templateUrl: '/shopCatalog/views/product/shop-product-recommended-item.html',
            link: function(scope, element, attrs){

            }
        };
    }
]);
