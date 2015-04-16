'use strict';

angular.module('mean.shopUser').directive('shopUserProfile', ['$rootScope', '$http', '$state', '$timeout', 'Global', 'ShopUser',
  function($rootScope, $http, $state, $timeout, Global, ShopCategory) {
    return{
      replace: true,
      templateUrl: '/shopUser/views/profile/tabs.html',
      link: function(scope, element, attrs){
        scope.user = {};
        scope.global = Global;

        if(scope.global.user){
          scope.user = scope.global.user;

          $http.get('/loggedin')
            .success(function(user){
              if(user) {
                scope.user.phoneNumber = user.phoneNumber;
                scope.user.addresses = user.addresses;
              }else{
                $state.go('auth.login');
              }
            });

          scope.updateProfile = function() {
            scope.registrationErrors = [];
            scope.updateMessages = [];
            $http.put('/auth/profile', {
              name: scope.user.name,
              phoneNumber: scope.user.phoneNumber,
              addresses: scope.user.addresses
            })
              .success(function(messages) {
                scope.updateMessages = messages;

                scope.updateErrors = 0;
                $rootScope.user = scope.user;
                Global.user = $rootScope.user;

                $timeout(function(){
                  scope.updateMessages = [];
                }, 2000);
              })
              .error(function(errors) {
                scope.updateMessages = 0;
                scope.updateErrors = errors;
              });
          };
        }
      }
    };
  }
]);
