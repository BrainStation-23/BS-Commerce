/**
 * Created by saif on 06/13/15.
 */
'use strict';

angular.module('shopAdmin').config(['$stateProvider',
    function ( $stateProvider) {

        $stateProvider
            .state('Settings', {
                abstract: true,
                url: '/Settings',
                template: '<ui-view/>'
            }).state('Settings.Store', {
                url: '/Store',
                templateUrl: 'modules/shopAdmin/views/settings/store.html'
                //controller: 'settingStoreController'
            }).state('Settings.Email', {
                abstract: true,
                url: '/Email',
                template: '<ui-view/>'
            }).state('Settings.Email.List', {
                url: '/List',
                templateUrl: 'modules/shopAdmin/views/settings/email/email-list.html',
                controller: 'settingsEmailListController'
            }).state('Settings.Email.Create', {
                url: '/Create',
                templateUrl: 'modules/shopAdmin/views/settings/email/email-create.html',
                controller: 'settingsEmailCreateController'
            }).state('Settings.Email.Edit', {
                url: '/Edit/:emailIndex',
                templateUrl: 'modules/shopAdmin/views/settings/email/email-edit.html',
                controller: 'settingsEmailEditController'
            });
    }
]);
