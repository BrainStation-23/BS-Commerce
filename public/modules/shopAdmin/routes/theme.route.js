'use strict';

angular.module('shopAdmin').config(['$stateProvider',
    function ( $stateProvider) {

        $stateProvider
            .state('Theme', {
                abstract: true,
                url: '/Theme',
                template: '<ui-view/>'
            })
            .state('Theme.List', {
                url: '/List',
                templateUrl: 'modules/shopAdmin/views/theme/theme-list.html',
                controller: 'themeListController'
            })
            .state('Theme.Edit', {
                url: '/Edit/:themeId',
                params: {
                    id: null
                },
                templateUrl: 'modules/shopAdmin/views/theme/theme-edit.html',
                controller: 'themeEditController'
            })
            .state('Theme.Create', {
                url: '/Create',
                templateUrl: 'modules/shopAdmin/views/theme/theme-create.html',
                controller: 'themeCreateController'
            });

    }
]);
