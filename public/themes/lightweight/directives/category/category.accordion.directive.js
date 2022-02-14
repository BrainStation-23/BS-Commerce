'use strict';

angular.module('lightweight').directive('categoryAccordion', ['Global', '_', '$rootScope', '$stateParams', '$timeout', 'CategoryService',
    function(Global, _, $rootScope, $stateParams, $timeout, CategoryService) {

        var highlightIfSelected = function(category, slug, parentCategory){

            if(category.slug === slug){
                category.isOpen = true;

                if(parentCategory) {
                    parentCategory.isOpen = true;
                }
            } else {
                category.isOpen = false;
            }

            _.forEach(category.subCategories, function (sub) {
                highlightIfSelected(sub, slug, category);
            });
        };

        var processCategorySelection = function(categories, slug){
            _.forEach(categories,function(category){
                highlightIfSelected(category, slug);
            });
        };

        return{
            restrict: 'AE',
            templateUrl: 'themes/lightweight/views/category/category-accordion.html',
            link: function(scope, element, attrs){

                scope.categories = [];

                $timeout(function() {
                    scope.slug = $stateParams.slug;
                });

                CategoryService.getCategories()
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
                    scope.slug = (toState.name === 'Category') ? toParams.slug : '';
                    processCategorySelection(scope.categories, scope.slug);
                });
            }
        };
    }
]);
