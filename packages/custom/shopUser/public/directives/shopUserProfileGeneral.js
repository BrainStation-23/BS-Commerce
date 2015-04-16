'use strict';

angular.module('mean.shopUser').directive('shopUserProfileGeneral', ['$rootScope', '$http', '$location', '$timeout', '$state', 'Global', 'ShopUser',
  function($rootScope, $http, $location, $timeout, $state, Global, ShopCategory) {
    return{
      replace: true,
      templateUrl: '/shopUser/views/profile-general.html',
      link: function(scope, element, attrs){
        scope.user = {};
        scope.global = Global;

        if(scope.global.user){
          scope.user = scope.global.user;

          $http.get('/loggedin')
            .success(function(user){
              scope.user.phoneNumber = user.phoneNumber;
            });
        }

        if(!scope.user){
          $state.go('auth.login');
        }

        scope.update = function() {
          scope.registrationErrors = [];
          $http
            .put('/auth/profile', {
              name: scope.user.name,
              phoneNumber: scope.user.phoneNumber
            })
            .success(function(messages) {
              scope.updateMessages = messages;

              scope.updateErrors = 0;
              $rootScope.user = scope.user;
              Global.user = $rootScope.user;

              $timeout(function(){
                $state.go('home');
              }, 2000);
            })
            .error(function(errors) {
              scope.updateMessages = 0;
              scope.updateErrors = errors;
            });
        };
      }
    };
  }
]);
