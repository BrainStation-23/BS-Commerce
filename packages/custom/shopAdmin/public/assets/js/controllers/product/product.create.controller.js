'use strict';
//var apps = angular.module('mean.shopAdmin');

angular.module('mean.shopAdmin').controller('productCreateController', ['$scope', '$state', 'productService', 'brandService', 'categoryService',
    function ($scope, $state, productService, brandService, categoryService) {

        $scope.product = {};
        $scope.product.name = 'test product name';
        $scope.product.categories = [];
        $scope.product.brands = [];

        categoryService.getCategories()
            .$promise
            .then(function(data) {
                $scope.categories = [];
                for (var i in data) {
                    var item = {};
                    item.id = data[i]._id;
                    item.parent = null;
                    item.text = data[i].name;
                    $scope.categories.push(item);
                    for (var j in data[i].subCategories) {
                        var subItem = {};
                        subItem.id = data[i].subCategories[j]._id;
                        subItem.parent = data[i]._id;
                        subItem.text = data[i].subCategories[j].name;
                        $scope.categories.push(subItem);
                    }
                }
                $scope.product.categories[0] = {};
                $scope.product.categories[0].categoryId = $scope.categories[0].id;
                $scope.product.categories[0].isFeatured = false;
                $scope.product.categories[0].displayOrder = 0;
            });

        brandService.searchBrand({})
            .$promise
            .then(function(response) {
                $scope.brands = [];
                var data = response.brands;
                for (var i in data) {
                    var item = {};
                    item.id = data[i]._id;
                    item.text = data[i].info.name;
                    $scope.brands.push(item);
                }
                $scope.product.brands[0] = {};
                $scope.product.brands[0].brandId = $scope.brands[0].id;
            });


        $scope.add = function (edit) {
            var p = {};
            p.categories = $scope.product.categories;
            p.brands = $scope.product.brands;
            p.tags = [];
            p.info = {
                name: $scope.product.name,
                shortDescription: $scope.product.shortDescription,
                fullDescription: $scope.product.fullDescription,
                sku: $scope.product.sku,
                price: $scope.product.price,
                oldPrice: $scope.product.oldPrice,
                cost: $scope.product.cost,
                publishDate: Date.now()
            };
            p.meta = {
                keywords: $scope.product.metaKeywords,
                title: $scope.product.metaTitle,
                description: $scope.product.metaDescription,
                friendlyPageName: $scope.product.metaFriendlyPageName
            };

            productService.createProduct(p)
                .$promise
                .then(function(response) {
                    if (edit) {
                        $state.go('Product.Edit', {productId: response._id});
                    } else {
                        $state.go('Product.List');
                    }
                });
        };
    }
]);