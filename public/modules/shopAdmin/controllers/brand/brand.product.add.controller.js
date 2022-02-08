'use strict';

angular.module('shopAdmin').controller('brandProductAddController', ['$scope', '$stateParams', '$state', 'brandService', 'productService', 'categoryService',
    function ($scope, $stateParams, $state, brandService, productService, categoryService) {
        $scope.numberOfDisplayOptions = [10, 15, 20, 50, 100];
        $scope.totalItems = 1;
        $scope.currentPage = 1;
        $scope.maxSize = 4;
        $scope.numberOfDisplay = 10;
        $scope.products = [];
        $scope.displayProducts = [];
        $scope.searchQuery = {};
        $scope.allChecked = false;

        categoryService.getCategories()
            .$promise
            .then(function(categories) {
                $scope.categories = [];
                angular.forEach(categories, function(category) {
                    var item = {};
                    item._id = category._id;
                    item.name = category.name;
                    $scope.categories.push(item);
                    angular.forEach(category.subCategories, function(subCategory) {
                        var subItem = {};
                        subItem._id = subCategory._id;
                        subItem.name = category.name + ' >> ' + subCategory.name;
                        $scope.categories.push(subItem);
                    });
                });
            });

        brandService.searchBrand({})
            .$promise
            .then(function(response) {
                $scope.brands = [];
                angular.forEach(response.brands, function(brand) {
                    var item = {};
                    item._id = brand._id;
                    item.name = brand.info.name;
                    $scope.brands.push(item);
                });
            });


        $scope.displayOptionChange = function() {

            var productsLength = $scope.products.length;
            if(productsLength > 0) {
                $scope.currentPage = 1;
                $scope.displayFrom = 1;
                $scope.displayTo = $scope.numberOfDisplay;

                if(productsLength === $scope.numberOfDisplay) {
                    $scope.displayTo = productsLength;
                    $scope.displayProducts = $scope.products;
                }
                else if((productsLength < $scope.numberOfDisplay) && (productsLength < $scope.totalItems)) {
                    $scope.searchProducts(productsLength, ($scope.numberOfDisplay - productsLength), function() {
                        $scope.displayTo = $scope.products.length;
                        $scope.displayProducts = $scope.products;
                    });
                }
                else if((productsLength < $scope.numberOfDisplay) && (productsLength === $scope.totalItems)) {
                    $scope.displayTo = productsLength;
                    $scope.displayProducts = $scope.products;
                }
                else if(productsLength > $scope.numberOfDisplay) {
                    $scope.displayTo = $scope.numberOfDisplay;
                    $scope.displayProducts = $scope.products.slice(0, $scope.numberOfDisplay);
                }
                if($scope.displayProducts[0].checked) {
                    $scope.allProductSelect = true;
                } else{
                    $scope.allProductSelect = false;
                }
            }
        };

        $scope.defaultSearchProducts = function () {
            $scope.searchQuery.numberOfSkip =0;
            $scope.searchQuery.numberOfDisplay = $scope.numberOfDisplay;
            productService.getProductsByCondition($scope.searchQuery)
                .$promise
                .then(function(response) {
                    $scope.products = response.products;
                    $scope.totalItems = response.totalProducts;
                    $scope.displayProducts = response.products;
                    $scope.displayOptionChange();
                });
        };
        $scope.defaultSearchProducts();

        $scope.searchProducts = function(numberOfSkip, numberOfDisplay, callback) {
            $scope.searchQuery.numberOfSkip = numberOfSkip;
            $scope.searchQuery.numberOfDisplay = numberOfDisplay;

            productService.getProductsByCondition($scope.searchQuery)
                .$promise
                .then(function(response) {
                    $scope.products = $scope.products.concat(response.products);
                    callback();
                });
        };

        $scope.changePagination = function (pageNo) {
            $scope.displayFrom = (pageNo - 1) * $scope.numberOfDisplay + 1;
            $scope.displayTo = $scope.displayFrom + $scope.numberOfDisplay - 1;

            if($scope.displayTo > $scope.products.length)
                $scope.displayTo = $scope.displayFrom + ($scope.products.length - $scope.displayFrom);
            $scope.displayProducts = $scope.products.slice($scope.displayFrom-1, $scope.displayTo);

            if($scope.displayProducts[0].checked) {
                $scope.allProductSelect = true;
            } else{
                $scope.allProductSelect = false;
            }
        };

        $scope.setPage = function (pageNo) {
            if($scope.totalItems > $scope.products.length) {
                var numberOfSkip = (pageNo -1) * $scope.numberOfDisplay;
                $scope.searchProducts(numberOfSkip, $scope.numberOfDisplay, function() {
                    $scope.changePagination(pageNo);
                });
            } else {
                $scope.changePagination(pageNo);
            }
            $scope.currentPage = pageNo;
        };

        var getEditableProductIds = function(callback) {
            var editableProductIds =[];
            angular.forEach($scope.products, function(product) {
                if(product.checked) {
                    editableProductIds.push(product._id);
                }
            });
            callback(editableProductIds);
        };

        $scope.saveProductToBrand = function() {
            getEditableProductIds(function(editableProductIds) {
                productService.addBrandToProduct($stateParams.brandId, editableProductIds)
                    .$promise
                    .then(function(response) {
                        //window.close();
                        $state.go('Brand.Edit', {brandId: $stateParams.brandId}, {reload: true});
                    });
            });
        };

        $scope.cancel = function() {
            $state.go('Brand.Edit', {brandId: $stateParams.brandId}, {reload: true});
        };

        $scope.isAllProductChecked = function() {
            angular.forEach($scope.displayProducts, function(product) {
                product.checked = $scope.allProductSelect;
            });
        };
    }
]);
