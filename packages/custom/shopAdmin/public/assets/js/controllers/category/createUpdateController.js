'use strict';

angular.module('mean.shopAdmin').controller('categoryCreateUpdateController', ['$scope', 'Global', '$stateParams', '$http','Upload',
    function ($scope, Global, $stateParams, $http, Upload) {
        //$scope.catId = $stateParams.catId;
        console.log('categoryCreateUpdateController');

        // for update page there will be a catId

        $scope.$watch('cat.files', function () {
            console.log($scope.cat.files);
        });
        // Info tab Page
        $scope.cat = {};
        $scope.cat.id = $stateParams.catId;
        $scope.cat.name = '';
        $scope.cat.slug = '';
        $scope.cat.description = '';
        $scope.cat.parent = null;
        $scope.cat.showOnHomePage = true;
        $scope.cat.includeInTopMenu = false;
        $scope.cat.allowToSelectPageSize = true;
        $scope.cat.published = true;
        $scope.cat.displayOrder = 2;

        // seo tab page
        $scope.catMetaKeywords = '';
        $scope.catMetaDescription = '';
        $scope.catMetaTitle = '';
        $scope.catSeoFriendlyPageName = '';

        if ($scope.catId) {
            $http.get('/api/categories/' + $scope.cat.id).
                success(function (data, status, headers, config) {
                    console.log(data);
                    $scope.name = data.name;
                    $scope.slug = data.slug;
                    $scope.published = true;
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }

        /*$scope.add = function (cat) {
            console.log('add function');
            console.log(cat);
            $http.post('/api/categories/',{
                category: cat
            }).
                success(function (data, status, headers, config) {
                    console.log(data);
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        };*/

        $scope.update = function () {
            console.log('update function');
        };

        $scope.delete = function () {
            console.log('delete function');
        };

        $scope.add = function (cat) {
            console.log('add function');
            console.log(cat.files);
            if ($scope.cat.files && $scope.cat.files.length) {
                var file = $scope.cat.files[0];

                Upload.upload({
                    url: 'api/categories',
                    fields: {
                        'cat': $scope.cat
                    },
                    file: file
                }).progress(function (evt) {
                    //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    //$scope.log = 'progress: ' + progressPercentage + '% ' +
                    //evt.config.file.name + '\n' + $scope.log;
                }).success(function (data, status, headers, config) {
                    //$scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                });
            }
        };
    }
]);