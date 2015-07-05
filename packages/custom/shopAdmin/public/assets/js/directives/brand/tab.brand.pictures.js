'use strict';

angular.module('mean.shopAdmin').directive('tabBrandPictures', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/brand/template/tab-brand-pictures.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);