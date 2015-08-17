'use strict';

angular.module('mean.shopAdmin').config(['$meanStateProvider',
    function ( $meanStateProvider) {

        $meanStateProvider
            .state('Brand', {
                abstract: true,
                url: '/Brand',
                template: '<ui-view/>'
            })
            .state('Brand.List', {
                url: '/List',
                templateUrl: 'shopAdmin/views/brand/brand-list.html',
                controller: 'brandListController'
            })
            .state('Brand.Edit', {
                url: '/Edit/:brandId',
                params: {
                    id: null
                },
                templateUrl: 'shopAdmin/views/brand/brand-edit.html',
                controller: 'brandEditController'
            }).state('Brand.Create', {
                url: '/Create',
                templateUrl: 'shopAdmin/views/brand/brand-create.html',
                controller: 'brandCreateController'
            });

    }
]);