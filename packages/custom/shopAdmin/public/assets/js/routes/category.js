'use strict';

angular.module('mean.shopAdmin').config(['$meanStateProvider',
    function ( $meanStateProvider) {

        $meanStateProvider
            .state('Category', {
                abstract: true,
                url: '/Category',
                template: '<ui-view/>'
            })
            .state('Category.List', {
                url: '/List',
                templateUrl: 'shopAdmin/views/category/list.html',
                controller: 'categoryListController'
            })
            .state('Category.Tree', {
                url: '/Tree',
                templateUrl: 'shopAdmin/views/category/tree.html',
                controller: 'categoryTreeController'
            })
            .state('Category.Edit', {
                url: '/Edit/:catId',
                params: {
                    catId: null
                },
                templateUrl: 'shopAdmin/views/category/edit.html',
                controller: 'categoryEditController'
            })
            .state('test', {
                url: '/test',
                templateUrl: 'shopAdmin/views/test.html',
                controller: 'testController'
            });
    }
]);