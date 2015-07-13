'use strict';

angular.module('mean.shopAdmin').directive('dynamicMultipleBrands', ['Global', '$http',
    function (Global, $http) {
        return {
            restrict: 'AE',
            replace: false,
            scope: true,
            templateUrl: 'shopAdmin/views/product/template/dynamic-multiple-brands.html',
            link: function (scope, element, attrs) {

                scope.placeholder = attrs.placeholder;

                scope.addMoreBrand = function () {
                    var newItemNo = scope.product.brands.length;
                    scope.product.brands[newItemNo] = {};
                    scope.product.brands[newItemNo].brandId = scope.brands[0].id;
                };

                scope.removeLastBrand = function () {
                    scope.product.brands.pop();
                };

                scope.showData = function () {
                    console.log(scope.product.brands);
                };
            }
        };

    }
]);
