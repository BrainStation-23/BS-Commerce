'use strict';

angular.module('mean.shopUser').controller('ShopUserPasswordController',['$scope', '$rootScope', '$state', '$http', 'Global',
  function($scope, $rootScope, $state, $http, Global){
    $scope.user = {};
    $scope.global = Global;
    $scope.errors = [];

    $scope.update = function(){
      $http.put('/auth/password',{
        password: $scope.user.password,
        newPassword: $scope.user.newPassword,
        confirmNewPassword: $scope.user.confirmNewPassword
      }).success(function(err, response){
        $scope.errors = [];
        $state.go('home');
      }).error(function(errors){
        $scope.errors = errors;
      });
    };

    if(!$scope.user){
      $state.go('auth.login');
    }
  }]);