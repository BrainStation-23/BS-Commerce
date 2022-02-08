'use strict';

angular.module('shopAdmin').config(['$stateProvider',
    function ( $stateProvider) {

        $stateProvider
            .state('Category', {
                abstract: true,
                url: '/Category',
                template: '<ui-view/>'
            })
            .state('Category.List', {
                url: '/List',
                templateUrl: 'modules/shopAdmin/views/category/list.html',
                controller: 'categoryListController'
            })
            .state('Category.Tree', {
                url: '/Tree',
                templateUrl: 'modules/shopAdmin/views/category/tree.html',
                controller: 'categoryTreeController'
            })
            .state('Category.Edit', {
                url: '/Edit/:categoryId',
                templateUrl: 'modules/shopAdmin/views/category/edit.html',
                controller: 'categoryEditController'
            })
            .state('Category.Create', {
                url: '/Create',
                templateUrl: 'modules/shopAdmin/views/category/create.html',
                controller: 'categoryCreateController'
            });

    }
]);
