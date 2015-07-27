'use strict';

angular.module('mean.shopAdmin').factory('settingsService', ['$resource',
    function($resource) {
        return {

            getEmailSettings: function() {
                console.log('get settings service');
                var getEmailSettings = $resource('/api/settings/emails', {}, {
                    'get': {method: 'GET', isArray: true}
                });
                return getEmailSettings.get({});
            }
        };
    }
]);