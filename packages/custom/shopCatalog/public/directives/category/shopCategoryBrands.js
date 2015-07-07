'use strict';

angular.module('mean.shopCatalog').directive('shopCategoryBrands', ['Global', 'ShopCatalog',
    function(Global, ShopCatalog) {
        return{
            replace: true,
            templateUrl: '/shopCatalog/views/category/shop-category-brands.html',
            link: function(scope, element, attrs){

            }
        };
    }
]);
