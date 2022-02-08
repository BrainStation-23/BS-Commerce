'use strict';

angular.module('shopAdmin').config(['$stateProvider',
    function ( $stateProvider) {

        $stateProvider
            .state('Brand', {
                abstract: true,
                url: '/Brand',
                template: '<ui-view/>'
            })
            .state('Brand.List', {
                url: '/List',
                templateUrl: 'modules/shopAdmin/views/brand/brand-list.html',
                controller: 'brandListController'
            })
            .state('Brand.Edit', {
                url: '/Edit/:brandId',
                params: {
                    id: null
                },
                templateUrl: 'modules/shopAdmin/views/brand/brand-edit.html',
                controller: 'brandEditController'
            })
            .state('Brand.Create', {
                url: '/Create',
                templateUrl: 'modules/shopAdmin/views/brand/brand-create.html',
                controller: 'brandCreateController'
            })
            .state('Brand.AddProduct', {
                url: '/AddProduct/:brandId',
                templateUrl: 'modules/shopAdmin/views/brand/brand-add-product.html',
                controller: 'brandProductAddController'
            });

    }
]);
