'use strict';

angular.module('mean.shopAdmin').directive('tabBrandInfo', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/brand/template/tab-brand-info.html',
            link: function (scope, element, attrs) {

            }

        };
    }
]);