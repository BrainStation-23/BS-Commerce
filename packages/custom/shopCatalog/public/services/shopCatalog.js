'use strict';

angular.module('mean.shopCatalog').factory('ShopCatalog', ['$resource',
    function ($resource) {
        return $resource('api/categories/:id', {
            id: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);


