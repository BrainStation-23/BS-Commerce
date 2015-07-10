'use strict';

angular.module('mean.shopAdmin').directive('dynamicMultipleCategories', ['Global', '$http',
    function (Global, $http) {
        return {
            restrict: 'AE',
            replace: false,
            scope: true,
            templateUrl: 'shopAdmin/views/product/template/dynamic-multiple-categories.html',
            link: function (scope, element, attrs) {

                scope.placeholder = attrs.placeholder;

                scope.addMoreCategory = function () {
                    var newItemNo = scope.product.categories.length;
                    scope.product.categories[newItemNo] = {};
                    scope.product.categories[newItemNo].categoryId = scope.categories[0].id;
                    scope.product.categories[newItemNo].isFeatured = false;
                    scope.product.categories[newItemNo].displayOrder = newItemNo;
                };

                scope.removeLastCategory = function () {
                    scope.product.categories.pop();
                };

                scope.showData = function () {
                    console.log(scope.product.categories);
                };
            }
        };

    }
]);
