'use strict';
//var apps = angular.module('mean.shopAdmin');

angular.module('mean.shopAdmin').controller('productUpdateController', ['$scope', 'Global', '$stateParams', '$http', 'Upload', '$state',
    function ($scope, Global, $stateParams, $http, Upload, $state) {
        console.log($stateParams.productId);
        $scope.product = {};
        $scope.product.id = $stateParams.productId;

        $http.get('/api/categories').
            success(function (data, status, headers, config) {
                $scope.categories = [];//{'id': 'noparent', 'parent': null, 'text': 'No Parent'}];
                //console.log(data);
                for (var i in data) {
                    var item = {};
                    item.id = data[i]._id;
                    item.parent = null;
                    item.text = data[i].name;
                    $scope.categories.push(item);
                    for (var j in data[i].subCategories) {
                        var subItem = {};
                        subItem.id = data[i].subCategories[j]._id;
                        subItem.parent = data[i]._id;
                        subItem.text = data[i].subCategories[j].name;
                        $scope.categories.push(subItem);
                    }
                }
                $scope.product.category = $scope.categories[0].id;
                $scope.setUpPage();
            })
            .error(function(data, status, headers, config){

            });
        $scope.setUpPage = function(){

            $http.get('/api/products/'+$scope.product.id)
                .success(function (data, status, headers, config) {

                    console.log(data.meta);

                    // categories
                    $scope.product.category = data.categories[0].categoryId;
                    $scope.product.isFeatured = data.categories[0].isFeatured;
                    $scope.product.displayOrder = data.categories[0].displayOrder;

                    // tags
                    $scope.product.tags = data.tags;

                    //infos
                    $scope.product.shortDescription = data.info.shortDescription;
                    $scope.product.fullDescription = data.info.fullDescription;
                    $scope.product.cost = data.info.cost;
                    $scope.product.price = data.info.price;
                    $scope.product.oldPrice = data.info.oldPrice;
                    $scope.product.publishDate = data.info.publishDate;
                    $scope.product.sku = data.info.sku;
                    $scope.product.name = data.info.name;

                    $scope.product.metaDescription = data.meta.description;
                    $scope.product.metaFriendlyPageName = data.meta.friendlyPageName;
                    $scope.product.metaKeywords = data.meta.keywords;
                    $scope.product.metaTitle = data.meta.title;

                })
                .error(function(data, status, headers, config){

                });

        };

        $scope.upload = function(selectedFile){
            console.log('upload function');

            var file = selectedFile? selectedFile[0] : null;
            console.log(file);
            Upload.upload({
                url: '/api/products/photos',
                fields: {
                    name: file.name
                },
                file: file
            }).progress(function (evt) {
                console.log('some progress');
                //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                //$scope.log = 'progress: ' + progressPercentage + '% ' +
                //    evt.config.file.name + '\n' + $scope.log;
            }).success(function (data, status, headers, config) {
                console.log(data);
                if(status == 500){
                    console.log('upload error');
                }else if(status == 404){
                    window.location = '/admin/login';
                }else if(status == 200){
                    var len = $scope.product.images.length;
                    $scope.product.images[len] = {};
                    $scope.product.images[len].id = data._id;
                    $scope.product.images[len].displayOrder = len;
                    $scope.product.images[len].alt = $scope.picture.alt;
                    $scope.product.images[len].title = $scope.picture.title;

                    $scope.picture.files[0]  = null;

                    console.log($scope.product);
                    $scope.update(true);

                }

            });
        };
    }
]);