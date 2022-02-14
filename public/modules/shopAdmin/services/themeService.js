'use strict';

angular.module('shopAdmin').factory('themeService', ['$resource', '$http',
    function($resource, $http) {
        return {
            createTheme: function(theme) {
                var createTheme = $resource('/api/admin/theme', {}, {
                    'create': {method: 'POST'}
                });
                return createTheme.create(theme);
            },
            getThemes: function() {
                var getThemes = $resource('/api/admin/theme', {}, {
                    'get': {method: 'GET',isArray: true}
                });
                return getThemes.get();
            },
            getThemeById: function(themeId) {
                var getThemeById = $resource('/api/admin/theme/:themeId', {themeId: '@themeId'}, {
                    'get': {method: 'GET'}
                });
                return getThemeById.get({themeId: themeId});
            },
            updateTheme: function(theme) {
                var updateTheme = $resource('/api/admin/theme/', {}, {
                    'put': {method: 'PUT'}
                });
                return updateTheme.put(theme);
            },
            deleteTheme: function(themeId) {
                var deleteTheme = $resource('/api/admin/theme/:themeId', {themeId: '@themeId'}, {
                    'delete': {method: 'DELETE'}
                });
                return deleteTheme.delete({themeId: themeId});
            }
        };
    }
]);
