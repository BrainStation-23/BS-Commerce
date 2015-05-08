(function(){
  'use strict';

  angular.module('mean.shopCatalog').config(['$stateProvider',
    function($stateProvider) {
      $stateProvider.state('checkout', {
        url: '/checkout',
        controller: 'checkoutController',
        templateUrl: 'shopCatalog/views/checkout.html'
      });
    }
  ]);
})();