'use strict';

angular.module('lightweight').factory('ProductService', ['$resource',
    function($resource) {
        return {
            getProductByCategory: function() {
               return $resource('/api/products');
            },
            getProductById: function(id) {
                var getProductById = $resource('api/products/:id', {id:'@_id'}, {
                    'get': {method: 'GET'}
                });
                return getProductById.get({id: id});
            },
            getFeaturedProducts: function(query) {
                var getFeaturedProducts = $resource('/api/productsByCondition', {}, {
                    'get': {method: 'GET'}
                });
                return getFeaturedProducts.get(query);
            },
            getSearchProduct: function(searchUrl) {
                var searchProduct = $resource('/api'+searchUrl, {}, {
                    'get': {method: 'GET'}
                });
                return searchProduct.get();
            }
        };
    }
]);
