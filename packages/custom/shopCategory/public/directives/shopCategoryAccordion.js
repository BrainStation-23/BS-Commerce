'use strict';

angular.module('mean.shopCategory').directive('shopCategoryAccordion', ['Global', '$state', 'ShopCategory',
    function(Global, $state, ShopCategory) {
      var highlightIfSelected = function(category, slug){
        if(category.slug === slug){
          category.isOpen = true;
          return true;
        }else {
          var subCategorySelected = _.any(category.subCategories, function (sub) {
            return highlightIfSelected(sub, slug);
          });

          if(subCategorySelected){
            category.isOpen = true;
          }
          return subCategorySelected
        }
      };

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
                  _.forEach(list,function(category){
                    highlightIfSelected(category, $state.params.slug);
                  })
                }
              })
              .catch(console.log);
          }
      };
    }
]);
