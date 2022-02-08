'use strict';

angular.module('lightweight').factory('BrandService', ['$resource',
    function($resource) {
        return {
            getBrands: function() {
                var getBrands = $resource('/api/brands', {}, {
                    'get': {method: 'GET'}
                });
                return getBrands.get();
            },
            getProductByBrand: function(brandId) {
                var getProductByBrand = $resource('/api/products/brand/:brandId', {brandId:'@brandId'}, {
                    'get': {method: 'GET'}
                });
                return getProductByBrand.get({brandId: brandId});
            }
        };
    }
]);

