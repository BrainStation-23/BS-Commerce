'use strict';
//var apps = angular.module('mean.shopAdmin');

angular.module('mean.shopAdmin').controller('productUpdateController', ['$scope', 'Global', '$stateParams', '$http', 'Upload', '$state',
    function ($scope, Global, $stateParams, $http, Upload, $state) {
        console.log($stateParams.productId);
        $scope.product = {};
        $scope.product.id = $stateParams.productId;
        $scope.picture = {};

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
            .error(function (data, status, headers, config) {

            });
        $scope.setUpPage = function () {

            $http.get('/api/products/' + $scope.product.id)
                .success(function (data, status, headers, config) {

                    console.log(data.meta);

                    // categories
                    /*$scope.product.category = data.categories[0].categoryId;
                    $scope.product.isFeatured = data.categories[0].isFeatured;
                    $scope.product.displayOrder = data.categories[0].displayOrder;*/
                    $scope.product.categories = data.categories;

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

                    $scope.product.photos = data.photos;

                })
                .error(function (data, status, headers, config) {

                });

        };

        $scope.upload = function (selectedFile) {
            console.log('upload function');

            var file = selectedFile ? selectedFile[0] : null;
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
                console.log('success');
                console.log(data);
                if (status === 500) {
                    console.log('upload error');
                } else if (status === 404) {
                    window.location = '/admin/login';
                } else if (status === 200) {
                    if ($scope.product.photos === undefined) {
                        $scope.product.photos = [];
                    }
                    //var len = $scope.product.photos.length;
                    $scope.product.photos.push(data._id);
                    /*$scope.product.photos[len] = {};
                    $scope.product.photos[len].id = data._id;
                    $scope.product.photos[len].displayOrder = len;
                    $scope.product.photos[len].alt = $scope.picture.alt;
                    $scope.product.photos[len].title = $scope.picture.title;*/
                    $scope.picture.files[0] = undefined;

                    console.log($scope.product);
                    $scope.update(true);
                }

            });
        };

        $scope.update = function () {
            var p = {};
            //p.categories = [];
            /*p.categories[0] = {
                categoryId: $scope.product.category,
                isFeatured: false,
                displayOrder: 0
            };*/
            p.categories = $scope.product.categories;
            p.tags = [];
            p.info = {
                name: $scope.product.name,
                shortDescription: $scope.product.shortDescription,
                fullDescription: $scope.product.fullDescription,
                sku: $scope.product.sku,
                price: $scope.product.price,
                oldPrice: $scope.product.oldPrice,
                cost: $scope.product.cost,
                publishDate:Date.now()
            };
            p.meta = {
                keywords:$scope.product.metaKeywords,
                title:$scope.product.metaTitle,
                description:$scope.product.metaDescription,
                friendlyPageName:$scope.product.metaFriendlyPageName
            };
            p.photos = $scope.product.photos;

            $http.put('/api/products/'+$scope.product.id, {product: p})
                .success(function (data, status, headers, config) {
                    console.log('success');
                    console.log(data);
                    $scope.refreshProduct(data);
                    $state.go('Product.List');
                })
                .error(function (data, status, headers, config) {

                });
        };

        $scope.refreshProduct = function(data){
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

            $scope.product.photos = data.photos;
            console.log($scope.product.photos);

        };

        $scope.deleteImage = function(id){
            console.log(id);
            $http.delete('/api/products/photos/'+id)
                .success(function(data, status, headers, config){
                    console.log(data);
                    var index = $scope.product.photos.indexOf(id);
                    $scope.product.photos.splice(index, 1);
                    $scope.update();
                })
                .error(function(data, status, headers, config){
                    console.log(data);
                });
        };

        $scope.deleteWholeProduct = function(){
            $scope.deleteImageAndProduct($scope.product.photos[0]);
        };

        $scope.deleteImageAndProduct = function(id){
            console.log(id);
            $http.delete('/api/products/photos/'+id)
                .success(function(data, status, headers, config){
                    var index = $scope.product.photos.indexOf(id);
                    $scope.product.photos.splice(index, 1);
                    if($scope.product.photos.length === 0){
                        $scope.deleteProduct();
                    }else{
                        $scope.deleteImageAndProduct($scope.product.photos[0]);
                    }

                })
                .error(function(data, status, headers, config){
                    console.log(data);
                });
        };

        $scope.deleteProduct = function(){
            $http.delete('/api/products/'+$scope.product.id )
                .success(function(data, status, headers, config){
                    $state.go('Product.List');
                })
                .error(function(data, status, headers, config){
                    console.log(data);
                });
        };
    }
]);