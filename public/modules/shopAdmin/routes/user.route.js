/**
 * Created by shaishab on 5/15/15.
 */
'use strict';

angular.module('shopAdmin').config(['$stateProvider',
    function ( $stateProvider) {

        $stateProvider
            .state('User', {
                abstract: true,
                url: '/User',
                template: '<ui-view/>'
            }).state('User.List', {
                url: '/List',
                templateUrl: 'modules/shopAdmin/views/user/user-list.html',
                controller: 'userListController'
            }).state('User.Edit', {
                url: '/Edit/:userId',
                templateUrl: 'modules/shopAdmin/views/user/user-edit.html',
                controller: 'userEditController'
            }).state('User.Create', {
                url: '/Create',
                templateUrl: 'modules/shopAdmin/views/user/user-create.html',
                controller: 'userCreateController'
            });
    }
]);
