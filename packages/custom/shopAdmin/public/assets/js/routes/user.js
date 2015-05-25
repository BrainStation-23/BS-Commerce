/**
 * Created by shaishab on 5/15/15.
 */
'use strict';

angular.module('mean.shopAdmin').config(['$meanStateProvider',
    function ( $meanStateProvider) {

        $meanStateProvider
            .state('User', {
                abstract: true,
                url: '/User',
                template: '<ui-view/>'
            }).state('User.List', {
                url: '/List',
                templateUrl: 'shopAdmin/views/user/user-list.html',
                controller: 'userListController'
            }).state('User.Edit', {
                url: '/Edit/:userId',
                templateUrl: 'shopAdmin/views/user/user-edit.html',
                controller: 'userEditController'
            });
    }
]);