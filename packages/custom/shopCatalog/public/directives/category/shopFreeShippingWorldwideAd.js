'use strict';

angular.module('mean.shopCatalog').directive('shopFreeShippingWorldwideAd', ['Global', 'ShopCatalog',
    function(Global, ShopCatalog) {
        return{
            replace: true,
            templateUrl: '/shopCatalog/views/category/shop-free-shipping-worldwide-ad.html',
            link: function(scope, element, attrs){

            }
        };
    }
]);
