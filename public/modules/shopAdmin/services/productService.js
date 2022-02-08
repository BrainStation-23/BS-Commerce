'use strict';

angular.module('shopAdmin').factory('productService', ['$resource',
    function($resource) {
        return {
            createProduct: function(product) {
                var createProduct = $resource('/api/products', {}, {
                    'create': {method: 'POST'}
                });
                return createProduct.create(product);
            },
            getProducts: function(query) {
                var getProducts = $resource('/api/products', {}, {
                    'get': {method: 'GET', isArray: true}
                });
                return getProducts.get(query);
            },
            getProductById: function(id) {
                var getProductById = $resource('/api/products/:id', {id: '@id'}, {
                    'get': {method: 'GET'}
                });
                return getProductById.get({id: id});
            },
            updateProduct: function(product) {
                var updateProduct = $resource('/api/products', {}, {
                    'put': {method: 'PUT'}
                });
                return updateProduct.put(product);
            },
            deleteProduct: function(id) {
                var deleteProduct = $resource('/api/products/:id', {id: '@id'}, {
                    'delete': {method: 'DELETE'}
                });
                return deleteProduct.delete({id: id});
            },
            deleteProductPhoto: function(productId, photoId) {
                var deleteProductPhoto = $resource('/api/products/:productId/photos/:photoId', {productId: '@productId', photoId: '@photoId'}, {
                    'delete': {method: 'DELETE'}
                });
                return deleteProductPhoto.delete({productId: productId, photoId: photoId});
            },
            getProductCount: function() {
                var getProductCount = $resource('/api/products/count', {}, {
                    'get': {method: 'GET'}
                });
                return getProductCount.get();
            },
            getProductsByCondition: function(query) {
                var getProducts = $resource('/api/productsByCondition', {}, {
                    'get': {method: 'GET'}
                });
                return getProducts.get(query);
            },
            addBrandToProduct: function(brandId, productIds) {
                var addBrandToProduct = $resource('/api/products/addBrandToProduct', {}, {
                    'update': {method: 'PUT'}
                });
                return addBrandToProduct.update({brandId: brandId, productIds: productIds});
            }
        };
    }
]);
