'use strict';

angular.module('mean.shopCategory').directive('shopCategoryBrands', ['Global', 'ShopCategory',
    function(Global, ShopCategory) {
        return{
            replace: true,
            templateUrl: '/shopCategory/views/shop-category-brands.html',
            link: function(scope, element, attrs){

            }
        };
    }
]);
