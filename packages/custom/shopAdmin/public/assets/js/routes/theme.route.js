'use strict';

angular.module('mean.shopAdmin').config(['$meanStateProvider',
    function ( $meanStateProvider) {

        $meanStateProvider
            .state('Theme', {
                abstract: true,
                url: '/Theme',
                template: '<ui-view/>'
            })
            .state('Theme.List', {
                url: '/List',
                templateUrl: 'shopAdmin/views/theme/theme-list.html',
                controller: 'themeListController'
            })
            .state('Theme.Edit', {
                url: '/Edit/:themeId',
                params: {
                    id: null
                },
                templateUrl: 'shopAdmin/views/theme/theme-edit.html',
                controller: 'themeEditController'
            })
            .state('Theme.Create', {
                url: '/Create',
                templateUrl: 'shopAdmin/views/theme/theme-create.html',
                controller: 'themeCreateController'
            });

    }
]);