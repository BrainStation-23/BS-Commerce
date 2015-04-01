'use strict';

angular.module('mean.shopCategory').directive('shopFreeShippingWorldwideAd', ['Global', 'ShopCategory',
    function(Global, ShopCategory) {
        return{
            replace: true,
            templateUrl: '/shopCategory/views/shop-free-shipping-worldwide-ad.html',
            link: function(scope, element, attrs){

            }
        };
    }
]);
