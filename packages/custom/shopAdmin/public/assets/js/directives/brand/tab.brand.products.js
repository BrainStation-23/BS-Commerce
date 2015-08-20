'use strict';

angular.module('mean.shopAdmin').directive('tabBrandProducts', ['Global', '$http', '$stateParams', 'productService',
    function (Global, $http, $stateParams, productService) {
        return {
            restrict: 'AE',
            replace: true,
            scope: '=',
            templateUrl: 'shopAdmin/views/brand/template/tab-brand-products.html',
            link: function (scope, element, attrs) {
                scope.brandId = $stateParams.brandId || null;

                if(scope.brandId) {
                    productService.getProductsByCondition({brandId: scope.brandId})
                        .$promise.then(function(response) {
                            scope.products = response;
                        });
                }

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
                    product.toEdit=true;
                    console.log('edit');
                };

                scope.updateProductInfo = function(product) {
                    console.log('update');
                };

            }
        };
    }
]);