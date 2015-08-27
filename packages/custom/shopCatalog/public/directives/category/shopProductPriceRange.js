'use strict';

angular.module('mean.shopCatalog').directive('shopProductPriceRange', ['Global', 'ShopCatalog',
    function(Global, ShopCatalog) {
        return{
            replace: true,
            templateUrl: '/shopCatalog/views/category/shop-product-price-range.html',
            link: function(scope, element, attrs){


            }
        };
    }
]);
