'use strict';

angular.module('mean.shopAdmin').controller('categoryListController', ['$scope', 'categoryService',
    function($scope, categoryService) {
        $scope.categories = [];

        categoryService.getCategories()
            .$promise
            .then(function(categories) {
                $scope.categories = [];
                var i=0;
                angular.forEach(categories, function(category) {
                    var item = {};
                    item._id = category._id;
                    item.name = category.name;
                    item.displayOrder = i+=1;
                    $scope.categories.push(item);
                    angular.forEach(category.subCategories, function(subCategory) {
                        var subItem = {};
                        subItem._id = subCategory._id;
                        subItem.displayOrder = i+=1;
                        subItem.name = category.name + ' >> ' + subCategory.name;
                        $scope.categories.push(subItem);
                    });
                });
            });
    }
]);