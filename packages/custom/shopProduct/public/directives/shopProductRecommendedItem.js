'use strict';

angular.module('mean.shopProduct').directive('shopProductRecommendedItem', ['Global', 'ShopProduct',
    function(Global, ShopProduct) {
        return{
            replace: true,
            scope:{
                imageSrc:'@'
            },
            templateUrl: '/shopProduct/views/shop-product-recommended-item.html',
            link: function(scope, element, attrs){

            }
        };
    }
]);
