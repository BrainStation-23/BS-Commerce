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

                  if($state.params.slug){
                    _.forEach(list, function(cat){
                      var index = _.findIndex(cat.subCategories,function(subCategory){
                        return (subCategory.slug === $state.params.slug);
                      });

                      if(index >=0){
                        cat.isOpen = true;
                        cat.isSelected = true;
                        cat.subCategories[index].isSelected = true;
                      }
                    })
                  }
                })
                .catch(console.log);
            }
        };
    }
]);
