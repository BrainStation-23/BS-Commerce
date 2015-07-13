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

/*angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
    .controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function ($scope, $timeout, $transition, $q) {
    }]).directive('carousel', [function () {
        return {};
    }]);*/


angular.module('mean.shopSlider').controller('CarouselDemoCtrl', ['$scope', 'Global', 'ShopSlider',
    function ($scope, Global, ShopSlider) {

        $scope.myInterval = 3000;
        var slides = $scope.slides = [];

        slides.push({
            title1: '<span>E</span>-SHOPPER',
            title2: 'Free E-Commerce Template',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            image: "/shopThemes/assets/img/home/girl1.jpg",
            pricing: "/shopThemes/assets/img/home/pricing.png"
        });

        slides.push({
            title1: '<span>E</span>-SHOPPER',
            title2: 'Free E-Commerce Template',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            image: "/shopThemes/assets/img/home/girl2.jpg",
            pricing: "/shopThemes/assets/img/home/pricing.png"
        });

        slides.push({
            title1: '<span>E</span>-SHOPPER',
            title2: 'Free E-Commerce Template',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            image: "/shopThemes/assets/img/home/girl3.jpg",
            pricing: "/shopThemes/assets/img/home/pricing.png"
        });


        /*$scope.addSlide = function () {
         var index = slides.length +1;
         slides.push({
         image: '/shopThemes/assets/img/home/girl'+index+'.jpg',
         text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
         ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
         });
         };*/

        /*for (var i = 0; i < 3; i = i + 1) {
         $scope.addSlide();
         }*/
    }
]);

/*
 <div class= "item" >
 <div class= "col-sm-6" >
 < h1 > < span > E < /span>-SHOPPER</
 h1 >

 < h2 > 100 % Responsive
 Design < / h2 >

 < p > Lorem
 ipsum
 dolor
 sit
 amet, consectetur
 adipisicing
 elit, sed
 do eiusmod tempor
 incididunt
 ut
 labore
 et
 dolore
 magna
 aliqua. < / p >
 < button
 type = "button"
 class
 = "btn btn-default get" > Get
 it
 now < / button >
 < / div >
 < div
 class
 = "col-sm-6" >
 < img
 src = "/shopThemes/assets/img/home/girl2.jpg"
 class
 = "girl img-responsive"
 alt = "" / >
 < img
 src = "/shopThemes/assets/img/home/pricing.png"
 class
 = "pricing"
 alt = "" / >
 < / div >
 < / div >
 < div
 class
 = "item" >
 < div
 class
 = "col-sm-6" >
 < h1 > < span > E < /span>-SHOPPER</
 h1 >

 < h2 > Free
 Ecommerce
 Template < / h2 >

 < p > Lorem
 ipsum
 dolor
 sit
 amet, consectetur
 adipisicing
 elit, sed
 do eiusmod tempor
 incididunt
 ut
 labore
 et
 dolore
 magna
 aliqua. < / p >
 < button
 type = "button"
 class
 = "btn btn-default get" > Get
 it
 now < / button >
 < / div >
 < div
 class
 = "col-sm-6" >
 < img
 src = "/shopThemes/assets/img/home/girl3.jpg"
 class
 = "girl img-responsive"
 alt = "" / >
 < img
 src = "/shopThemes/assets/img/home/pricing.png"
 class
 = "pricing"
 alt = "" / >
 < / div >
 < / div >*/
