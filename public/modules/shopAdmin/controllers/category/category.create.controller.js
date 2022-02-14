'use strict';

angular.module('shopAdmin').controller('categoryCreateController', ['$scope', '$window', '$stateParams','Upload','$state', 'categoryService',
    function ($scope, $window, $stateParams, Upload, $state, categoryService) {
        // Info tab Page
        $scope.category = {};
        $scope.categories = [];
        $scope.category.meta = {};

        var generateCategoriesForDropDownList = function(getCategories, callback) {
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
                generateCategoriesForDropDownList(responseCategories, function(categories) {
                    $scope.categories = categories;
                });
            });

        $scope.createCategory = function () {
            var file = $scope.category.file ? $scope.category.file : null;
            $scope.category.file = undefined;

            if($scope.category.parent === ''){
                $scope.category.parent = null;
            }

            if($scope.category.meta && $scope.category.meta.keywords && typeof $scope.category.meta.keywords === 'string') {
                $scope.category.meta.keywords = $scope.category.meta.keywords.length ? $scope.category.meta.keywords.split(',') : [];
            }

            Upload.upload({
                url: '/api/categories',
                data: {file: file, category: $scope.category}
            }).progress(function (evt) {
                //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                //$scope.log = 'progress: ' + progressPercentage + '% ' +
                //evt.config.file.name + '\n' + $scope.log;
            }).success(function (data, status, headers, config) {
                $window.toastr.success('Created new category');
                $state.go('Category.List');
            }).error(function(data, status, headers, config){
                $window.toastr.error('Failed to add new category');
                console.log('error' + data);
            });
        };
    }
]);
