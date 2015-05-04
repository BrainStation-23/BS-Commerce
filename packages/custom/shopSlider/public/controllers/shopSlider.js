'use strict';

/* jshint -W098 */
angular.module('mean.shopSlider').controller('ShopSliderController', ['$scope', 'Global', 'ShopSlider',
  function($scope, Global, ShopSlider) {
    $scope.global = Global;
    $scope.package = {
      name: 'shopSlider'
    };
  }
]);

/*angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
    .controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function($scope, $timeout, $transition, $q) {
    }]).directive('carousel', [function() {
        return {

        }
 }]);*/
