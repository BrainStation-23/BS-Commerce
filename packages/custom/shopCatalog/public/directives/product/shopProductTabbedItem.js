'use strict';

angular.module('mean.shopCatalog').directive('shopProductTabbedItem', ['Global', 'ShopCatalog',
    function(Global, ShopCatalog) {
        return{
            replace: true,
            scope:{
                tabbedImageSrc:'@'
            },
            templateUrl: '/shopCatalog/views/product/shop-product-tabbed-item.html',
            link: function(scope, element, attrs){

            }
        };
    }
]);
