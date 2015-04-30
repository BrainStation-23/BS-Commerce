'use strict';

angular.module('mean.shopThemes').directive('shopHeader',['$rootScope', 'Global', function($rootScope, Global){
  return {
    templateUrl: '/shopThemes/views/header.html',
    link: function(scope, element, attrs){
      scope.global = Global;

      $rootScope.$on('loggedin', function() {
        scope.global = {
          authenticated: !! $rootScope.user,
          user: $rootScope.user
        };
      });

      $rootScope.$on('loggedout', function() {
        scope.global = {
          authenticated: !! $rootScope.user,
          user: $rootScope.user
        };
      });
    }
  };
}]);
