'use strict';

angular.module('mean.shopCategory').directive('shopCategoryAccordion', ['Global', '$state', 'ShopCategory',
    function(Global, $state, ShopCategory) {
        return{
            replace: true,
            templateUrl: '/shopCategory/views/shop-category-accordion.html',
            link: function(scope, element, attrs){
              scope.categories = [];
              ShopCategory
                .query()
                .$promise
                .then(function(list){
                  scope.categories = list;
                })
                .catch(console.log);
            }
        };
    }
]);
