'use strict';

angular.module('mean.shopAdmin').directive('tabBrandProducts', ['Global', '$http', '$stateParams', 'productService',
    function (Global, $http, $stateParams, productService) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: 'shopAdmin/views/brand/template/tab-brand-products.html',
            link: function (scope, element, attrs) {
                scope.brandId = $stateParams.brandId || null;
                scope.editableProduct = {};

                scope.numberOfDisplayOptions = [10, 15, 20, 50, 100];
                scope.numberOfDisplay = 10;
                scope.maxSize = 4;
                scope.totalItems = 10;
                scope.currentPage = 1;
                scope.displayProducts = [];
                scope.searchQuery = {};


                scope.displayOptionChange = function() {
                    var productsLength = scope.products.length;
                    if(productsLength > 0) {
                        scope.currentPage = 1;
                        scope.displayFrom = 1;
                        scope.displayTo = scope.numberOfDisplay;

                        if(productsLength === scope.numberOfDisplay) {
                            scope.displayTo = productsLength;
                            scope.displayProducts = scope.products;
                        }
                        else if((productsLength < scope.numberOfDisplay) && (productsLength < scope.totalItems)) {
                            scope.searchProducts(productsLength, (scope.numberOfDisplay - productsLength), function() {
                                scope.displayTo = scope.products.length;
                                scope.displayProducts = scope.products;
                            });
                        }
                        else if((productsLength < scope.numberOfDisplay) && (productsLength === scope.totalItems)) {
                            scope.displayTo = productsLength;
                            scope.displayProducts = scope.products;
                        }
                        else if(productsLength > scope.numberOfDisplay) {
                            scope.displayTo = scope.numberOfDisplay;
                            scope.displayProducts = scope.products.slice(0, scope.numberOfDisplay);
                        }
                    }
                };

                if(scope.brandId) {
                    scope.searchQuery.numberOfSkip =0;
                    scope.searchQuery.numberOfDisplay = scope.numberOfDisplay;
                    scope.searchQuery.brandId = scope.brandId;
                    productService.getProductsByBrand(scope.searchQuery)
                        .$promise.then(function(response) {
                            scope.products = response;
                            scope.products = response.products;
                            scope.totalItems = response.totalProducts;
                            scope.displayProducts = response.products;
                            scope.displayOptionChange();
                        });
                }

                scope.searchProducts = function(numberOfSkip, numberOfDisplay, callback) {
                    scope.searchQuery.numberOfSkip = numberOfSkip;
                    scope.searchQuery.numberOfDisplay = numberOfDisplay;

                    productService.getProductsByBrand(scope.searchQuery)
                        .$promise
                        .then(function(response) {
                            scope.products = scope.products.concat(response.products);
                            callback();
                        });
                };

                scope.deleteBrandFromProduct = function(product) {
                    if(confirm('Are you sure want to delete this product from this brand list ?')) {
                        var index = scope.products.indexOf(product);
                        var brandIndex = scope.products[index].brands.map(function(brand) { return brand.brandId; }).indexOf(scope.brandId);
                        scope.products[index].brands.splice(brandIndex, 1);
                        productService.updateProduct(product)
                            .$promise
                            .then(function(response) {
                                scope.products.splice(index, 1);
                            });
                    }
                };

                scope.showProductToEdit = function(product) {
                    scope.editableProduct = {};
                    product.toEdit=true;
                    angular.copy(product, scope.editableProduct);
                };

                scope.updateProductInfo = function(product) {
                    if(confirm('Are you sure want to update this product information ?')) {
                        var index = scope.products.indexOf(product);
                        productService.updateProduct(scope.editableProduct)
                            .$promise
                            .then(function(response) {
                                scope.products[index] = scope.editableProduct;
                                scope.products[index].toEdit = false;
                            });
                    }
                };

                scope.changePagination = function (pageNo) {
                    scope.displayFrom = (pageNo - 1) * scope.numberOfDisplay + 1;
                    scope.displayTo = scope.displayFrom + scope.numberOfDisplay - 1;

                    if(scope.displayTo > scope.products.length)
                        scope.displayTo = scope.displayFrom + (scope.products.length - scope.displayFrom);
                    scope.displayProducts = scope.products.slice(scope.displayFrom-1, scope.displayTo);
                };

                scope.setPage = function (pageNo) {
                    if(scope.totalItems > scope.products.length) {
                        var numberOfSkip = (pageNo -1) * scope.numberOfDisplay;
                        scope.searchProducts(numberOfSkip, scope.numberOfDisplay, function() {
                            scope.changePagination(pageNo);
                        });
                    } else {
                        scope.changePagination(pageNo);
                    }
                    scope.currentPage = pageNo;
                };

            }
        };
    }
]);