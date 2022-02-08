'use strict';

angular.module('shopAdmin').config(['$stateProvider',
    function ( $stateProvider) {

        $stateProvider
            .state('Product', {
                abstract: true,
                url: '/Product',
                template: '<ui-view/>'
            })
            .state('Product.List', {
                url: '/List',
                templateUrl: 'modules/shopAdmin/views/product/product-list.html',
                controller: 'productListController'
            })
            .state('Product.Edit', {
                url: '/Edit/:id',
                params: {
                    catId: null
                },
                templateUrl: 'modules/shopAdmin/views/product/product-edit.html',
                controller: 'productUpdateController'
            }).state('Product.Create', {
                url: '/Create',
                templateUrl: 'modules/shopAdmin/views/product/product-create.html',
                controller: 'productCreateController'
            });

    }
]);
