'use strict';

angular.module('mean.shopCategory').directive('shopProductPriceRange', ['Global', 'ShopCategory',
    function(Global, ShopCategory) {
        return{
            replace: true,
            templateUrl: '/shopCategory/views/shop-product-price-range.html',
            link: function(scope, element, attrs){


            }
        };
    }
]);
