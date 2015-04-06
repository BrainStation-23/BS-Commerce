'use strict';

angular.module('mean.shopAdmin').controller('registrationController', ['$scope', '$modal', 'Global',
  function($scope, $modal, Global) {
    $modal.open({
      templateUrl: 'shopAdmin/views/registration-modal.html',
      controller: 'registrationInstanceController',
      backdrop: 'static',
      keyboard: false
    });
  }
]);

angular.module('mean.shopAdmin').controller('registrationInstanceController', ['$http', '$scope', '$modalInstance', '$rootScope', '$state', '$timeout', 'Global',
  function($http, $scope, $modalInstance, $rootScope, $state, $timeout, Global) {
    $scope.user = {};

    $scope.register = function() {
      $scope.usernameError = null;
      $scope.registerError = null;
      $http
        .post('/register', {
          email: $scope.user.email.toLowerCase(),
          password: $scope.user.password,
          confirmPassword: $scope.user.confirmPassword,
          username: $scope.user.email,
          name: $scope.user.name
        })
        .success(function() {
            $http
              .get('/users/me')
              .success(function(user){
                  if(user) {
                    $rootScope.$emit('loggedin', user);

                    $modalInstance.dismiss('User registered and signed up');
                    $timeout(function () {
                      $state.go('home');
                    });
                  }
              });
        })
        .error(function(error) {
          if (error === 'Username already taken') {
            $scope.usernameError = error;
          } else if (error === 'Email already taken') {
            $scope.emailError = error;
          } else{
            $scope.registerError = error;
          }
        });
    };
  }
]);
