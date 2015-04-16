'use strict';

angular.module('mean.shopUser').directive('shopUserProfileGeneral', ['$rootScope', '$http', '$location', '$timeout', '$state', 'Global', 'ShopUser',
  function($rootScope, $http, $location, $timeout, $state, Global, ShopCategory) {
    return{
      replace: true,
      templateUrl: '/shopUser/views/profile/general.html',
      link: function(scope, element, attrs){

      }
    };
  }
]);
