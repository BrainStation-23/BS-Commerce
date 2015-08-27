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
                    for(var i = 0; i< scope.brands.length; i+=1) {
                        var index = scope.product.brands.indexOf(scope.brands[i].id);
                        if(index === -1) {
                            scope.product.brands.push(scope.brands[i].id);
                            return;
                        }
                    }
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
