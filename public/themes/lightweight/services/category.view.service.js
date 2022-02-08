'use strict';

angular.module('lightweight').factory('CategoryService', ['$resource',
    function ($resource) {
        return {
            getCategories: function () {
                var categories = $resource('/api/categories', {}, {
                    'get': {method: 'GET', isArray: true}
                });
                return categories.get();
            }
        };
    }
]);
