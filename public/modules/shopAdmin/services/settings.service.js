'use strict';

angular.module('shopAdmin').factory('settingsService', ['$resource',
    function($resource) {
        return {
            addNewSettingsWithEmail: function(settings) {
                var addNewSettingsWithEmail = $resource('/api/settings', {}, {
                    'post': {method: 'POST'}
                });
                return addNewSettingsWithEmail.post(settings);
            },
            getEmailSettings: function() {
                var getEmailSettings = $resource('/api/settings/emails', {}, {
                    'get': {method: 'GET'}
                });
                return getEmailSettings.get({});
            },
            addNewEmailSettings: function(settings) {
                var addNewEmailSettings = $resource('/api/settings', {}, {
                    'put': {method: 'PUT'}
                });
                return addNewEmailSettings.put(settings);
            },

            editEmailSettings: function(settings) {
                var editEmailSettings = $resource('/api/settings', {}, {
                    'put': {method: 'PUT'}
                });
                return editEmailSettings.put(settings);
            },

            testEmailSend: function(sendTo) {
                var testEmailSend = $resource('/api/settings/emails/send', {}, {
                   'post': {method: 'POST'}
                });

                return testEmailSend.post(sendTo);
            }
        };
    }
]);
