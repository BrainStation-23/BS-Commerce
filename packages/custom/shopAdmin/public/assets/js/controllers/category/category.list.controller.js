'use strict';

angular.module('mean.shopAdmin').controller('categoryListController', ['$scope', 'categoryService',
    function($scope, categoryService) {
        $scope.categories = [];

        var generateCategoriesForList = function(getCategories, callback) {
            var generatedCategories = [];

            var generateCategoriesWithParent = function(categories, parentCategoryName) {
                angular.forEach(categories, function(category) {
                    if(parentCategoryName) {
                        category.name = parentCategoryName + ' >> ' + category.name;
                    }

                    generatedCategories.push(category);

                    if(category.subCategories) {
                        generateCategoriesWithParent(category.subCategories, category.name);
                    }
                });
            };
            generateCategoriesWithParent(getCategories, null);
            callback(generatedCategories);
        };

        categoryService.getCategories()
            .$promise
            .then(function(responseCategories) {
                generateCategoriesForList(responseCategories, function(categories) {
                    $scope.categories = categories;
                });
            });
    }
]);