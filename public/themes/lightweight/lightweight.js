'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('lightweight', ['ngAnimate', 'ui.bootstrap']);

angular.module('lightweight').factory('_', ['$window', function($window) {
    return $window._; // assumes lodash has already been loaded on the page
}]);
