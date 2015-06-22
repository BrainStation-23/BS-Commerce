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

angular.module('mean.shopAdmin').controller('loginInstanceController',
    ['$http', '$scope', '$modalInstance', '$rootScope', '$state', '$timeout', 'Global', 'userService',
  function($http, $scope, $modalInstance, $rootScope, $state, $timeout, Global, userService) {
    $scope.user = {};

    $scope.login = function() {

      var userLoginInfo = userService.userLogin($scope.user.email.toLowerCase(), $scope.user.password, $scope.user.rememberMe);
      userLoginInfo.$promise.then(function(response) {
        if(response.user.roles.indexOf('admin') === -1) {
            userService.userLogout().$promise.then(function(logoutResponse) {
                $scope.loginerror = 'Authentication failed.';
            });
        }
        else {
            $rootScope.$emit('loggedin', response.user);
            $modalInstance.dismiss('User registered and signed up');
            $timeout(function(){
                $state.go('home');
            });
        }
      },
      function(error) {
        $scope.loginerror = 'Authentication failed.';
      });


    };

    $scope.register = function($event){
      $modalInstance.dismiss('Cancel');
      $state.go('auth.register');
    };
  }
]);
