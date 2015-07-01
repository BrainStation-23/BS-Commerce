'use strict';

angular.module('mean.shopAdmin').config(['$meanStateProvider',
    function ( $meanStateProvider) {

        $meanStateProvider
            .state('Product', {
                abstract: true,
                url: '/Product',
                template: '<ui-view/>'
            })
            .state('Product.List', {
                url: '/List',
                templateUrl: 'shopAdmin/views/product/product-list.html',
                controller: 'productListController'
            })
            .state('Product.Edit', {
                url: '/Edit/:productId',
                params: {
                    catId: null
                },
                templateUrl: 'shopAdmin/views/product/product-edit.html',
                controller: 'productUpdateController'
            }).state('Product.Create', {
                url: '/Create',
                templateUrl: 'shopAdmin/views/product/product-create.html',
                controller: 'productCreateController'
            });

    }
]);