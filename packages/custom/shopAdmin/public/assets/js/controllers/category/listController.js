'use strict';

angular.module('mean.shopAdmin').controller('categoryListController', ['$scope', 'Global', '$http',
    function($scope, Global, $http) {
        $scope.categories;
        $http.get('/api/categories').
            success(function(data, status, headers, config) {
                $scope.categories = [];
                for(var i in data){
                    var item = data[i];
                    item.displayOrder = parseInt(i)+1;
                    $scope.categories.push(item);
                    for(var j in data[i].subCategories){
                        var subItem = data[i].subCategories[j];
                        subItem.displayOrder = parseInt(j)+1;
                        subItem.name = data[i].name + ' >> ' + subItem.name;
                        $scope.categories.push(subItem);
                    }
                }
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
    }
]);