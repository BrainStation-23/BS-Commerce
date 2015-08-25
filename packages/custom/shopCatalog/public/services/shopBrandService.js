'use strict';

angular.module('mean.shopCatalog').factory('shopBrandService', ['$resource',
    function($resource) {
        return {
            getProductByBrand: function(brandId) {
                var getProductByBrand = $resource('/api/products/brand/:brandId', {brandId:'@brandId'}, {
                    'get': {method: 'GET'}
                });
                return getProductByBrand.get({brandId: brandId});
            }
        };
    }
]);

