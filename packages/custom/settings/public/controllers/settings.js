'use strict';

/* jshint -W098 */
angular.module('mean.settings').controller('SettingsController', ['$scope', 'Global', 'Settings',
  function($scope, Global, Settings) {
    $scope.global = Global;
    $scope.package = {
      name: 'settings'
    };
  }
]);
