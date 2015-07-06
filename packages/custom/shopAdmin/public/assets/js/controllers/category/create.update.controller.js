'use strict';
//var apps = angular.module('mean.shopAdmin');

angular.module('mean.shopAdmin').controller('categoryCreateUpdateController', ['$scope', 'Global', '$stateParams', '$http','Upload','$state',
    function ($scope, Global, $stateParams, $http, Upload, $state) {
        //$scope.catId = $stateParams.catId;
        console.log('categoryCreateUpdateController');

        // for update page there will be a catId

        $scope.$watch('cat.files', function () {
            console.log($scope.cat.files);
        });


        /*$scope.$watch('cat.parent', function () {
            if($scope.cat.parent === '' || $scope.cat.parent === null ){
                $scope.cat.parent = 'noparent';
            }
        });*/



        // Info tab Page
        $scope.cat = {};
        $scope.cat.id = $stateParams.catId;
        $scope.cat.name = 'Sample Category';
        $scope.cat.slug = '';
        $scope.cat.description = 'Sample Category Description';
        $scope.cat.parent = 'noparent';
        $scope.cat.showOnHomePage = true;
        $scope.cat.includeInTopMenu = false;
        $scope.cat.allowToSelectPageSize = true;
        $scope.cat.published = true;
        $scope.cat.displayOrder = 2;

        $scope.cat.files = [];

        // seo tab page
        $scope.catMetaKeywords = '';
        $scope.catMetaDescription = '';
        $scope.catMetaTitle = '';
        $scope.catSeoFriendlyPageName = '';



        $scope.categories=[];
        //$scope.categories=[null, 'SPORTSWEAR', 'MENS', 'WOMENS', 'KIDS'];
        $http.get('/api/categories').
            success(function (data, status, headers, config) {
                $scope.categories = [{'id': 'noparent', 'parent': null, 'text': 'No Parent'}];
                //console.log(data);
                for (var i in data) {
                    var item = {};
                    item.id = data[i]._id;
                    item.parent = null;
                    item.text = data[i].name;
                    $scope.categories.push(item);
                    /*for (var j in data[i].subCategories) {
                        var subItem = {};
                        subItem.id = data[i].subCategories[j]._id;
                        subItem.parent = data[i]._id;
                        subItem.text = data[i].subCategories[j].name;
                        $scope.categories.push(subItem);
                    }*/
                }


                $scope.cat.parent = 'noparent';

                if ($scope.cat.id) {
                    $http.get('/api/categories/' + $scope.cat.id).
                        success(function (data, status, headers, config) {

                            if(data.parent === null){
                                data.parent = 'noparent';
                            }

                            $scope.cat.name = data.name;
                            $scope.cat.description = data.description;
                            $scope.cat.parent = data.parent;
                            console.log($scope.cat.parent);
                            $scope.cat.slug = data.slug;
                            $scope.cat.displayOrder = data.displayOrder;
                            $scope.cat.showOnHomePage = data.showOnHomePage;
                            $scope.cat.includeInTopMenu = data.includeInTopMenu;
                            $scope.cat.allowToSelectPageSize = data.allowToSelectPageSize;
                            $scope.cat.imageId = data.imageId;
                            if(data.imageId){
                                $scope.cat.image = '/api/categories/imageId/'+ data.imageId;
                            }
                        }).
                        error(function (data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                        });
                }
            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        $scope.update = function () {
            console.log('update function');
        };

        $scope.delete = function () {
            if($scope.cat.id){
                $http.delete('/api/categories/' + $scope.cat.id)
                    .success(function (data, status, headers, config) {
                        console.log('successfully deleted');
                        //console.log(angular.toJson($state.get()));
                        $state.go('Category.List');
                    })
                    .error(function (data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    });
            }
            console.log('delete function', $scope.cat.id);
        };

        $scope.add = function (cat) {
            console.log('add function');
            console.log($scope.cat.files);
            //if ($scope.cat.files && $scope.cat.files.length) {
                var file = $scope.cat.files ? $scope.cat.files[0] : null;
                if($scope.cat.parent === 'noparent'){
                    $scope.cat.parent = null;
                }

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
                    $state.go('Category.List');
                    //$scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                }).error(function(data, status, headers, config){
                    console.log('error block' + data);
                });
            //}
        };

        $scope.update = function () {
            console.log('update function');
            console.log($scope.cat.files);
            //if ($scope.cat.files && $scope.cat.files.length) {
            //var file = $scope.cat.files ? $scope.cat.files[0] : null;
            if($scope.cat.parent === 'noparent'){
                $scope.cat.parent = null;
            }
            console.log($scope.cat);
            /*Upload.upload({
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
                $state.go('Category.List');
                //$scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
            }).error(function(data, status, headers, config){
                console.log('error block' + data);
            });*/
            //}
        };
    }
]);