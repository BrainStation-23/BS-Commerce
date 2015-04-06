'use strict';

angular.module('mean.shopCategory').directive('shopCategoryAccordion', ['Global', 'ShopCategory',
    function(Global, ShopCategory) {
        return{
            replace: true,
            templateUrl: '/shopCategory/views/shop-category-accordion.html',
            link: function(scope, element, attrs){
              ShopCategory
                .query()
                .$promise
                .then(function(list){
                  console.log(list);
                })
                .catch(console.log);
            }
        };
    }
]);
