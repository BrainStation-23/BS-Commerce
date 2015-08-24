'use strict';

angular.module('mean.shopAdmin').controller('productCreateController', ['$scope', '$state', 'productService', 'brandService', 'categoryService',
    function ($scope, $state, productService, brandService, categoryService) {

        $scope.product = {};
        $scope.product.info ={};
        $scope.product.info.name = 'test product name';
        $scope.product.categories = [];
        $scope.product.brands = [];
        $scope.product.meta ={};

        categoryService.getCategories()
            .$promise
            .then(function(categories) {
                $scope.categories = [];
                angular.forEach(categories, function(category) {
                    var item = {};
                    item.id = category._id;
                    item.parent = null;
                    item.text = category.name;
                    $scope.categories.push(item);
                    angular.forEach(category.subCategories, function(subCategory) {
                        var subItem = {};
                        subItem.id = subCategory._id;
                        subItem.parent = category._id;
                        subItem.text = subCategory.name;
                        $scope.categories.push(subItem);
                    });
                });
                $scope.product.categories[0] = {};
                $scope.product.categories[0].categoryId = $scope.categories[0].id;
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


        $scope.add = function (edit) {
            $scope.product.meta.keywords = $scope.product.meta.keywords ? $scope.product.meta.keywords.split(',') : [];
            productService.createProduct($scope.product)
                .$promise
                .then(function(response) {
                    if (edit) {
                        $state.go('Product.Edit', {id: response._id});
                    } else {
                        $state.go('Product.List');
                    }
                });
        };
    }
]);