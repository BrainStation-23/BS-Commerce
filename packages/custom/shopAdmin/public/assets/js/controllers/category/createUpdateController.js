'use strict';

angular.module('mean.shopAdmin').controller('categoryCreateUpdateController', ['$scope', 'Global', '$stateParams', '$http',
    function ($scope, Global, $stateParams, $http) {
        //$scope.catId = $stateParams.catId;
        console.log('categoryCreateUpdateController');

        // for update page there will be a catId


        // Info tab Page
        $scope.cat = {};
        $scope.cat.id = $stateParams.catId;
        /*$scope.cat.name = 'sampleName';
        $scope.catSlug = '';
        $scope.catDescription = '';
        $scope.catPicture = '';
        $scope.catParent = '';
        $scope.catShowOnHomePage = '';
        $scope.catIncludeInTopMenu = '';
        $scope.catAllowToSelectPageSize = false;
        $scope.catPublished = false;
        $scope.catDisplayOrder = 5;

        // seo tab page
        $scope.catMetaKeywords = '';
        $scope.catMetaDescription = '';
        $scope.catMetaTitle = '';
        $scope.catSeoFriendlyPageName = '';*/

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

        $scope.add = function (cat) {
            console.log('add function');
            console.log(cat);
            $http.post('/api/categories/add/',{
                category: cat
            }).
                success(function (data, status, headers, config) {
                    console.log(data);
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        };

        $scope.update = function () {
            console.log('update function');
        };

        $scope.delete = function () {
            console.log('delete function');
        };
    }
]);