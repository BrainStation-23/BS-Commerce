'use strict';

angular.module('mean.shopAdmin').controller('categoryEditController', ['$scope', '$state', '$stateParams', 'categoryService',
    function($scope, $state, $stateParams, categoryService) {
        $scope.categoryId = $stateParams.categoryId;
        $scope.category = {};
        $scope.category.meta = {};

        categoryService.getCategoryById($stateParams.categoryId)
            .$promise
            .then(function(category) {
                $scope.category = category;
                if(category.imageId){
                    $scope.category.image = '/api/products/photos/'+ category.imageId;
                }
            });

        categoryService.getCategories()
            .$promise
            .then(function(categories) {
                $scope.categories = [];
                angular.forEach(categories, function(category) {
                    var item = {};
                    item._id = category._id;
                    item.parent = null;
                    item.text = category.name;
                    $scope.categories.push(item);
                });
            });

        $scope.update = function () {
            if($scope.category.parent === ''){
                $scope.category.parent = null;
            }
            if(typeof $scope.category.meta.keywords === 'string') {
                $scope.category.meta.keywords = $scope.category.meta.keywords ? $scope.category.meta.keywords.split(',') : [];
            }
            categoryService.updateCategory($scope.category)
                .$promise
                .then(function(response) {
                   $state.go('Category.List');
                });
        };

        $scope.delete = function () {
            categoryService.deleteCategory($scope.category._id)
                .$promise.then(function(promise) {
                    $state.go('Category.List');
                });
        };
    }
]);