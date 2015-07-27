/**
 * Created by saif on 06/13/15.
 */
'use strict';

angular.module('mean.shopAdmin').config(['$meanStateProvider',
    function ( $meanStateProvider) {

        $meanStateProvider
            .state('Settings', {
                abstract: true,
                url: '/Settings',
                template: '<ui-view/>'
            }).state('Settings.Store', {
                url: '/Store',
                templateUrl: 'shopAdmin/views/settings/store.html'
                //controller: 'settingStoreController'
            }).state('Settings.Email', {
                url: '/Email/List',
                templateUrl: 'shopAdmin/views/settings/email/email-list.html',
                controller: 'settingsEmailListController'
            }).state('Settings.Email.Create', {
                url: '/Email/Create',
                templateUrl: 'shopAdmin/views/settings/email/email-create.html'
                //controller: 'settingsEmailController'
            });
    }
]);