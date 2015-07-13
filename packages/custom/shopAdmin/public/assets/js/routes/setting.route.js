/**
 * Created by saif on 06/13/15.
 */
'use strict';

angular.module('mean.shopAdmin').config(['$meanStateProvider',
    function ( $meanStateProvider) {

        $meanStateProvider
            .state('Setting', {
                abstract: true,
                url: '/Setting',
                template: '<ui-view/>'
            }).state('Setting.Store', {
                url: '/Store',
                templateUrl: 'shopAdmin/views/setting/store.html',
                controller: 'settingStoreController'
            });
    }
]);