'use strict';

angular.module('mean.shopAdmin').factory('categoryService', ['$resource',
    function($resource) {
        return {
            createCategory: function(product) {
                var createCategory = $resource('/api/products', {}, {
                    'create': {method: 'POST'}
                });
                return createCategory.create({product: product});
            },
            getCategories: function() {
                var getCategories = $resource('/api/categories', {}, {
                    'get': {method: 'GET', isArray: true}
                });
                return getCategories.get();
            }
        };
    }
]);