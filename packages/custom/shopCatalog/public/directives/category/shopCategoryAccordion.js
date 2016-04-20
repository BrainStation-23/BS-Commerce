'use strict';

angular.module('mean.shopCatalog').directive('shopCategoryAccordion', ['Global', '$rootScope', '$state', 'ShopCatalog',
    function(Global, $rootScope, $state, ShopCatalog) {

        var highlightIfSelected = function(category, slug){
            if(category.slug === slug){
                category.isOpen = true;
                return true;
            }
            var subCategorySelected = _.any(category.subCategories, function (sub) {
                return highlightIfSelected(sub, slug);
            });

            if(subCategorySelected){
                category.isOpen = true;
            }else{
                category.isOpen = false;
            }
            return subCategorySelected;
        };

        var processCategorySelection = function(categories, slug){
            _.forEach(categories,function(category){
                highlightIfSelected(category, slug);
            });
        };

        return{
            restrict: 'AE',
            templateUrl: '/shopCatalog/views/category/shop-category-accordion.html',
            link: function(scope, element, attrs){
                scope.slug = $state.params.slug;
                scope.categories = [];

                ShopCatalog
                    .query()
                    .$promise
                    .then(function(list){
                        scope.categories = list;

                        if(scope.slug){
                            processCategorySelection(list, scope.slug);
                        }
                    });

                scope.toggleCategory = function(category) {
                    category.isOpen = !category.isOpen;

                    if(category.isOpen) {
                        angular.element('#'+ category.slug).show();
                    } else {
                        angular.element('#'+ category.slug).hide();
                    }
                };

                $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                    console.log(toState,toParams);
                    scope.slug = (toState.name === 'products-in-category') ? toParams.slug : '';
                    processCategorySelection(scope.categories, scope.slug);
                });
            }
        };
    }
]);
