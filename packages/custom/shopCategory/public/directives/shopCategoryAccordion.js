'use strict';

angular.module('mean.shopCategory').directive('shopCategoryAccordion', ['Global', 'ShopCategory',
    function(Global, ShopCategory) {
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

              scope.toggleOpen = function(category){
                category.isOpen = !category.isOpen;
              };
            }
        };
    }
]);
