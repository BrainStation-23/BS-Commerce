'use strict';

angular.module('mean.shopAdmin').factory('brandService', ['$resource', '$http',
    function($resource, $http) {
        return {
            createBrand: function(brand) {
                var createBrand = $resource('/api/brands', {}, {
                    'create': {method: 'POST'}
                });
                return createBrand.create(brand);
            },
            searchBrand: function(query) {
                var searchRequest = $resource('/api/brands', {}, {
                    'get': {method: 'GET'}
                });
                return searchRequest.get(query);
            },
            getBrandById: function(brandId) {
                var getBrandById = $resource('/api/brands/:brandId', {brandId: '@brandId'}, {
                    'get': {method: 'GET'}
                });
                return getBrandById.get({brandId: brandId});
            },
            updateBrand: function(brand) {
                var updateBrand = $resource('/api/brands', {}, {
                    'put': {method: 'PUT'}
                });
                return updateBrand.put(brand);
            },
            deleteBrand: function(brandId) {
                var deleteBrand = $resource('/api/brands/:brandId', {brandId: '@brandId'}, {
                    'delete': {method: 'DELETE'}
                });
                return deleteBrand.delete({brandId: brandId});
            }
        };
    }
]);