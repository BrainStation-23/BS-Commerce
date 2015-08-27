'use strict';

angular.module('mean.shopAdmin').factory('categoryService', ['$resource',
    function($resource) {
        return {
            createCategory: function(product) {
                var createCategory = $resource('/api/category', {}, {
                    'create': {method: 'POST'}
                });
                return createCategory.create({product: product});
            },
            getCategories: function() {
                var getCategories = $resource('/api/categories', {}, {
                    'get': {method: 'GET', isArray: true}
                });
                return getCategories.get();
            },
            getCategoryById: function(id) {
                var getCategoryById = $resource('/api/categories/:id', {id: '@id'}, {
                    'get': {method: 'GET'}
                });
                return getCategoryById.get({id: id});
            },
            updateCategory: function(category) {
                var updateCategory = $resource('/api/categories', {}, {
                    'put': {method: 'PUT'}
                });
                return updateCategory.put(category);
            },
            deleteCategory: function(id) {
                var deleteCategory = $resource('/api/categories/:id', {id: '@id'}, {
                    'delete': {method: 'DELETE'}
                });
                return deleteCategory.delete({id: id});
            }
        };
    }
]);