'use strict';

angular.module('lightweight').factory('CompareService', ['$rootScope','Global', '_', '$resource',
    function($rootScope, Global, _, $resource) {
        return {
            getCompare: function(){
                var getCompare = $resource('api/compare', {}, {
                    'get': {method: 'GET'}
                });
                return getCompare.get();
            },
            addToCompare: function(product){
                var addToCompare = $resource('/api/compare', {}, {
                    'add': {method: 'POST'}
                });
                return addToCompare.add(product);
            },
            deleteCompareItem: function(product){
                var deleteCompareItem = $resource('/api/compare/item', {}, {
                    'delete': {method: 'DELETE'}
                });
                return deleteCompareItem.delete(product.item);
            },
            deleteAllCompareItems: function(){
                var deleteAllItem = $resource('/api/compare/allitems', {}, {
                    'delete': {method: 'DELETE'}
                });
                return deleteAllItem.delete();
            }
        };
    }
]);


