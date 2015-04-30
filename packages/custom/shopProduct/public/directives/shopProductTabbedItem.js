'use strict';

angular.module('mean.shopProduct').directive('shopProductTabbedItem', ['Global', 'ShopProduct',
    function(Global, ShopProduct) {
        return{
            replace: true,
            scope:{
                tabbedImageSrc:'@'
            },
            templateUrl: '/shopProduct/views/shop-product-tabbed-item.html',
            link: function(scope, element, attrs){

            }
        };
    }
]);
