'use strict';

/* jshint -W098 */
angular.module('mean.shopUser').controller('ShopUserRegistrationController', ['$scope', '$rootScope', '$http', '$location', 'Global', 'ShopUser',
  function($scope, $rootScope, $http, $location, Global, ShopUser) {
    $scope.user = {};
    $scope.global = Global;
    $scope.global.registerForm = true;

    $scope.register = function() {
      $scope.usernameError = null;
      $scope.registerError = null;
      $http.post('/auth/register', {
        email: $scope.user.email,
        password: $scope.user.password,
        confirmPassword: $scope.user.confirmPassword,
        name: $scope.user.name,
        phoneNumber: $scope.user.phoneNumber
      })
        .success(function() {
          // authentication OK
          $scope.registerError = 0;
          $rootScope.user = $scope.user;
          Global.user = $rootScope.user;
          Global.authenticated = !! $rootScope.user;
          $rootScope.$emit('loggedin');
          $location.url('/');
        })
        .error(function(error) {
          // Error: authentication failed
          if (error === 'Username already taken') {
            $scope.usernameError = error;
          } else if (error === 'Email already taken') {
            $scope.emailError = error;
          } else $scope.registerError = error;
        });
    };
  }
]);
