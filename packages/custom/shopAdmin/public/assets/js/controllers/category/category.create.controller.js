'use strict';

angular.module('mean.shopAdmin').controller('categoryCreateController', ['$scope', '$stateParams','Upload','$state', 'categoryService',
    function ($scope, $stateParams, Upload, $state, categoryService) {
        // Info tab Page
        $scope.category = {};
        $scope.category.files = [];
        $scope.categories = [];
        $scope.category.meta = {};

        categoryService.getCategories()
            .$promise
            .then(function(categories) {
                angular.forEach(categories, function(category) {
                    var item = {};
                    item._id = category._id;
                    item.text = category.name;
                    $scope.categories.push(item);
                });
            });

        $scope.createCategory = function () {
                var file = $scope.category.files ? $scope.category.files[0] : null;
                if($scope.category.parent === ''){
                    $scope.category.parent = null;
                }
            $scope.category.meta.keywords = $scope.category.meta.keywords ? $scope.category.meta.keywords.split(',') : [];
                Upload.upload({
                    url: 'api/categories',
                    fields: {
                        'category': $scope.category
                    },
                    file: file
                }).progress(function (evt) {
                    //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    //$scope.log = 'progress: ' + progressPercentage + '% ' +
                    //evt.config.file.name + '\n' + $scope.log;
                }).success(function (data, status, headers, config) {
                    $state.go('Category.List');
                }).error(function(data, status, headers, config){
                    console.log('error block' + data);
                });
        };
    }
]);