'use strict';

angular.module('mean.shopAdmin').directive('tabBrandAcl', ['Global', '$http',
    function (Global, $http) {
        return {
            replace: true,
            templateUrl: 'shopAdmin/views/brand/template/tab-brand-acl.html',
            link: function (scope, element, attrs) {


            }

        };
    }
]);