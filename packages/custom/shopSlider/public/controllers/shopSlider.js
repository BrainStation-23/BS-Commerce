'use strict';

/* jshint -W098 */
angular.module('mean.shopSlider').controller('ShopSliderController', ['$scope', 'Global', 'ShopSlider',
    function ($scope, Global, ShopSlider) {
        $scope.global = Global;
        $scope.package = {
            name: 'shopSlider'
        };
    }
]);



angular.module('mean.shopSlider').controller('CarouselDemoCtrl', ['$scope', 'Global', 'ShopSlider',
    function ($scope, Global, ShopSlider) {

        $scope.myInterval = 6000;



    }
]);

/*
 */
