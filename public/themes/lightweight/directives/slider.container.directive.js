'use strict';

angular.module('lightweight').directive('sliderContainer', ['Global',
    function(Global) {
        return{
            restrict: 'AE',
            replace: true,
            templateUrl: 'themes/lightweight/views/slider/slider-container.html',
            link: function($scope, element, attrs){
                $scope.myInterval = 5000;
                $scope.noWrapSlides = false;
                $scope.active = 0;
                var slides = $scope.slides = [];
                var currIndex = 0;

                $scope.addSlide = function(imageNo) {
                    slides.push({
                        image: 'themes/lightweight/assets/img/home/girl'+imageNo+'.jpg',
                        text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 3],
                        id: currIndex++
                    });
                };

                for (var i = 1; i < 4; i++) {
                    $scope.addSlide(i);
                }
            }
        };
    }
]);
