'use strict';

angular.module('mean.shopUser').controller('ShopUserLoginController',['$scope', '$rootScope', '$http', '$location', 'Global',
  function($scope, $rootScope, $http, $location, Global) {
    // This object will be filled by the form
    $scope.user = {};
    $scope.global = Global;

    $scope.login = function() {
      $http.post('/auth/login', {
        email: $scope.user.email,
        password: $scope.user.password,
        rememberMe: $scope.user.rememberMe
      }).success(function(response) {
          $scope.loginError = null;
          $rootScope.user = response.user;
          Global.user = $rootScope.user;
          Global.authenticated = !! $rootScope.user;
          $rootScope.$emit('loggedin');
          $location.url('/');
        })
        .error(function() {
          $scope.loginerror = 'Authentication failed.';
        });
    };
  }
]);