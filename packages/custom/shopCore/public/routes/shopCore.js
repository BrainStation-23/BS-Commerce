'use strict';

angular.module('mean.shopCore').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shopCore example page', {
      url: '/shopCore/example',
      templateUrl: 'shopCore/views/index.html'
    });
  }
]).run(['$rootScope', function($rootScope){
  $rootScope.$on('$stateChangeSuccess', function() {
    window.scrollTo(0,0);
  });
}]);
