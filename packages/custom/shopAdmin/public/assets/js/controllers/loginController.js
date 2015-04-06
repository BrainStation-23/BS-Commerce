'use strict';

angular.module('mean.shopAdmin').controller('loginController', ['$scope', '$modal', 'Global',
  function($scope, $modal, Global) {
    $modal.open({
      templateUrl: 'shopAdmin/views/login-modal.html',
      controller: 'loginInstanceController',
      backdrop: 'static',
      keyboard: false
    });
  }
]);

angular.module('mean.shopAdmin').controller('loginInstanceController', ['$http', '$scope', '$modalInstance', '$rootScope', '$state', '$timeout', 'Global',
  function($http, $scope, $modalInstance, $rootScope, $state, $timeout, Global) {
    $scope.user = {};

    $scope.login = function() {
      $http.post('/login', {
        email: $scope.user.email.toLowerCase(),
        password: $scope.user.password
      }).success(function(response) {
        $rootScope.$emit('loggedin', response.user);

        $modalInstance.dismiss('User registered and signed up');
        $timeout(function(){
          $state.go('home');
        });
      })
      .error(function() {
        $scope.loginerror = 'Authentication failed.';
      });
    };

    $scope.register = function($event){
      $modalInstance.dismiss('Cancel');
      $state.go('auth.register');
    };
  }
]);
