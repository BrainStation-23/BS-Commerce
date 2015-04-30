'use strict';

angular.module('mean.shopUser').controller('ShopUserLogoutController',['$scope', '$rootScope', '$http', '$state', '$timeout', 'Global',
  function($scope, $rootScope, $http, $state, $timeout, Global){
    $http.get('/auth/logout')
      .success(function(response){
        $rootScope.user = null;
        Global.user = $rootScope.user;
        Global.authenticated = !! $rootScope.user;

        $timeout(function(){
          $rootScope.$emit('loggedout');
        });

        $state.go('home');
      });
  }]);