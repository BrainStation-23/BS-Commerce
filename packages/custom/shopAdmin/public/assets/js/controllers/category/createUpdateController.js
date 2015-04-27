'use strict';

angular.module('mean.shopAdmin').controller('categoryCreateUpdateController', ['$scope', 'Global', '$stateParams', '$http',
    function($scope, Global, $stateParams, $http) {
        //$scope.catId = $stateParams.catId;
        console.log('categoryCreateUpdateController');

        // for update page there will be a catId
        $scope.catId = $stateParams.catId;

        // Info tab Page
        $scope.catName = '';
        $scope.catSlug = ''
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
        $scope.catSeoFriendlyPageName = '';

        if($scope.catId){
            $http.get('/api/categories/'+$scope.catId).
                success(function(data, status, headers, config) {
                    console.log(data);
                    $scope.catName = data.name;
                    $scope.catSlug = data.slug;
                    $scope.catPublished = true;
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }

        $scope.add = function(){

        };

        $scope.update = function(){

        };

        $scope.delete = function(){

        };
    }
]);