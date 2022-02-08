'use strict';

angular.module('shopAdmin').controller('productCreateController', ['$scope', '$window', '$state', 'productService', 'brandService', 'categoryService',
    function ($scope, $window, $state, productService, brandService, categoryService) {

        $scope.product = {};
        $scope.product.info ={};
        $scope.product.info.name = 'test product name';
        $scope.product.categories = [];
        $scope.product.brands = [];
        $scope.product.meta ={};

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
            .then(function(promiseCategories) {

                generateCategoriesForDropDownList(promiseCategories, function(categories) {
                    $scope.categories = categories;
                });

                $scope.product.categories[0] = {};
                $scope.product.categories[0].categoryId = $scope.categories[0]._id;
                $scope.product.categories[0].isFeatured = false;
                $scope.product.categories[0].displayOrder = 0;
            });

        brandService.searchBrand({})
            .$promise
            .then(function(response) {
                $scope.brands = [];
                angular.forEach(response.brands, function(brand) {
                    var item = {};
                    item.id = brand._id;
                    item.text = brand.info.name;
                    $scope.brands.push(item);
                });
                $scope.product.brands[0] = $scope.brands[0].id;
            });


        $scope.addProduct = function (edit) {
            if($scope.product.meta && $scope.product.meta.keywords && typeof $scope.product.meta.keywords === 'string') {
                $scope.product.meta.keywords = $scope.product.meta.keywords.length ? $scope.product.meta.keywords.split(',') : [];
            }
            productService.createProduct($scope.product)
                .$promise
                .then(function(response) {
                    if (edit) {
                        $window.toastr.success('Created new product');
                        $state.go('Product.Edit', {id: response._id});
                    } else {
                        $window.toastr.success('Created new product');
                        $state.go('Product.List');
                    }
                });
        };
    }
]);
