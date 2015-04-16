'use strict';

angular.module('mean.shopUser').directive('shopUserProfileAddress', ['Global', 'ShopUser',
  function(Global, ShopCategory) {
    return{
      replace: true,
      templateUrl: '/shopUser/views/profile-address.html',
      link: function(scope, element, attrs){

      }
    };
  }
]);
