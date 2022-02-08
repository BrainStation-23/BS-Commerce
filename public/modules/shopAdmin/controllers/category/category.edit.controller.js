'use strict';

angular.module('shopAdmin').controller('categoryEditController', ['$scope', '$window', '$state', '$stateParams', 'categoryService',
    function($scope, $window, $state, $stateParams, categoryService) {
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
                    item.name = category.name;
                    $scope.categories.push(item);
                });
            });

        $scope.update = function () {
            if($scope.category.parent === ''){
                $scope.category.parent = null;
            }
            if($scope.category.meta && $scope.category.meta.keywords && typeof $scope.category.meta.keywords === 'string') {
                $scope.category.meta.keywords = $scope.category.meta.keywords.length ? $scope.category.meta.keywords.split(',') : [];
            }
            categoryService.updateCategory($scope.category)
                .$promise
                .then(function(response) {
                    $window.toastr.success('Updated category');
                    $state.go('Category.List');
                });
        };

        $scope.delete = function () {
            if(confirm('Are you sure want to delete this category')) {
                categoryService.deleteCategory($scope.category._id)
                    .$promise.then(function(promise) {
                    $window.toastr.success('Deleted category');
                    $state.go('Category.List');
                });
            }
        };
    }
]);
