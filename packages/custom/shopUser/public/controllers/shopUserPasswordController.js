'use strict';

angular.module('mean.shopUser').controller('ShopUserPasswordController',['$scope', '$rootScope', '$timeout', '$state', '$http', 'Global',
  function($scope, $rootScope, $timeout, $state, $http, Global){
    $scope.user = {};
    $scope.global = Global;
    $scope.errors = [];

    if(!$scope.user){
      $state.go('auth.login');
    }

    $scope.update = function(){
      $http.put('/auth/password',{
        password: $scope.user.password,
        newPassword: $scope.user.newPassword,
        confirmNewPassword: $scope.user.confirmNewPassword
      }).success(function(messages){
        $scope.messages = messages;
        $scope.errors = [];

        $timeout(function(){
          $state.go('home');
        }, 2000);
      }).error(function(errors){
        $scope.messages = 0;
        $scope.errors = errors;
      });
    };

    $scope.resetForgotPassword = function(){
      $scope.pleaseWait = true;
        $scope.resetError = '';
        $scope.resetSuccess = '';
      $http.put('/auth/resetForgotPassword', {
        email: $scope.user.email
      }).success(function(message){

        $scope.pleaseWait = false;
        $scope.resetSuccess = message;
        $scope.resetError = '';
      }).error(function(error){

        $scope.pleaseWait = false;
        $scope.resetError=error;
        $scope.resetSuccess = '';
      });
    };
  }]);