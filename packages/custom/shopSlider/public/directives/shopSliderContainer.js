'use strict';

angular.module('mean.shopSlider').directive('shopSliderContainer', ['Global', 'ShopSlider',
    function(Global, ShopSlider) {
        return{
            replace: true,
            templateUrl: '/shopSlider/views/shop-slider-container.html',
            link: function(scope, element, attrs){

            }
        };
    }
]);
