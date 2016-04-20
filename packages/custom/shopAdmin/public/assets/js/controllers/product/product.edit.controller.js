'use strict';
//var apps = angular.module('mean.shopAdmin');

angular.module('mean.shopAdmin').controller('productUpdateController',
    ['$scope', '$stateParams', 'Upload', '$state', 'categoryService', 'brandService', 'productService', '$http',
    function ($scope, $stateParams, Upload, $state, categoryService, brandService, productService, $http) {
        $scope.product = {};
        $scope.picture = {};
        $scope.product.categories = [];
        $scope.product.brands = [];
        $scope.product.meta ={};

        var generateCategoriesForDropDownList = function(getCategories, callback) {
            var generatedCategories = [];

            var generateCategoriesWithParent = function(categories, parentCategoryName) {
                angular.forEach(categories, function(category) {
                    if(parentCategoryName) {
                        category.name = parentCategoryName + ' >> ' + category.name;
                    }

                    generatedCategories.push(category);

                    if(category.subCategories) {
                        generateCategoriesWithParent(category.subCategories, category.name);
                    }
                });
            };
            generateCategoriesWithParent(getCategories, null);
            callback(generatedCategories);
        };

        categoryService.getCategories()
            .$promise
            .then(function(promiseCategories) {

                generateCategoriesForDropDownList(promiseCategories, function(categories) {
                    $scope.categories = categories;
                });
                $scope.setUpPage();
            });

        brandService.searchBrand({})
            .$promise
            .then(function(response) {
                $scope.brands = [];
                angular.forEach(response.brands, function(brand) {
                    var item = {};
                    item.id = brand._id;
                    item.text = brand.info.name;
                    $scope.brands.push(item);
                });
            });

        $scope.setUpPage = function () {
            if(!$stateParams.id) {
                return;
            }
            productService.getProductById($stateParams.id)
                .$promise
                .then(function(product) {
                    $scope.product = product;
                });
        };

        $scope.upload = function (selectedFile) {

            var file = selectedFile ? selectedFile[0] : null;
            Upload.upload({
                url: '/api/products/photos',
                fields: {
                    name: file.name
                },
                file: file
            }).progress(function (evt) {
                //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                //$scope.log = 'progress: ' + progressPercentage + '% ' +
                //    evt.config.file.name + '\n' + $scope.log;
            }).success(function (data, status, headers, config) {
                if (status === 404) {
                    window.location = '/admin/login';
                } else if (status === 200) {
                    if ($scope.product.photos === undefined) {
                        $scope.product.photos = [];
                    }
                    $scope.product.photos.push(data._id);
                    $scope.picture.files[0] = undefined;
                    $scope.picture.title ='';
                    //$scope.update(true);
                }

            });
        };

        $scope.update = function () {
            if(typeof $scope.product.meta.keywords === 'string') {
                $scope.product.meta.keywords = $scope.product.meta.keywords ? $scope.product.meta.keywords.split(',') : [];
            }
            productService.updateProduct($scope.product)
                .$promise
                .then(function(data) {
                    $state.go('Product.List');
                });
        };

        $scope.deleteImage = function(id){
            productService.deleteProductPhoto(id)
                .$promise
                .then(function(promise) {
                    var index = $scope.product.photos.indexOf(id);
                    $scope.product.photos.splice(index, 1);
                    $scope.update();
                });
        };

        $scope.deleteWholeProduct = function(){
            $scope.deleteImageAndProduct($scope.product.photos[0]);
        };

        $scope.deleteImageAndProduct = function(id){
            productService.deleteProductPhoto(id)
                .$promise
                .then(function(data) {
                    var index = $scope.product.photos.indexOf(id);
                    $scope.product.photos.splice(index, 1);
                    if($scope.product.photos.length === 0){
                        $scope.deleteProduct();
                    }else{
                        $scope.deleteImageAndProduct($scope.product.photos[0]);
                    }
                });
        };

        $scope.deleteProduct = function(){
            productService.deleteProduct($scope.product._id)
                .$promise
                .then(function(data) {
                    $state.go('Product.List');
                });
        };
    }
]);