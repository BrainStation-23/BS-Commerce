'use strict';

angular.module('mean.shopCatalog').factory('ShopProduct', ['$resource',
    function($resource) {
        return {
            update: function(id) {
                return $resource('api/products/:id',{
                    id:'@_id'
                },{
                    update: {
                        method: 'PUT'
                    }
                });
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
            }
        };
    }
]);
