'use strict';

angular.module('mean.shopSlider').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('shopSlider example page', {
      url: '/shopSlider/example',
      templateUrl: 'shopSlider/views/index.html'
    });
  }
]);
