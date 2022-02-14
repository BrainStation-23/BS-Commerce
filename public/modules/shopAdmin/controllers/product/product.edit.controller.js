'use strict';

angular.module('shopAdmin').controller('productUpdateController',
    ['$scope', '$window', '$stateParams', 'Upload', '$state', 'categoryService', 'brandService', 'productService',
    function ($scope, $window, $stateParams, Upload, $state, categoryService, brandService, productService) {
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

        $scope.upload = function (picture) {

            var file = picture.file ? picture.file : null;
            var pictureInfo = {title: picture.title, alt: picture.alt, displayOrder: picture.displayOrder};
            Upload.upload({
                url: '/api/products/'+$stateParams.id+'/photos',
                data: {file: file, pictureInfo: pictureInfo}
            }).progress(function (evt) {
                //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                //$scope.log = 'progress: ' + progressPercentage + '% ' +
                //    evt.config.file.name + '\n' + $scope.log;
            }).success(function (data, status, headers, config) {
                $window.toastr.success('Successfully updated');
                $scope.product = data;
                $scope.picture = {};
            });
        };

        $scope.update = function () {
            if($scope.product.meta && $scope.product.meta.keywords && typeof $scope.product.meta.keywords === 'string') {
                $scope.product.meta.keywords = $scope.product.meta.keywords.length ? $scope.product.meta.keywords.split(',') : [];
            }
            productService.updateProduct($scope.product)
                .$promise
                .then(function(data) {
                    $window.toastr.success('Updated product');
                    $state.go('Product.List');
                });
        };

        $scope.deleteImage = function(photoId){
            if(confirm('Are you sure want to delete this picture ?')) {
                productService.deleteProductPhoto($stateParams.id, photoId)
                    .$promise
                    .then(function(updateProduct) {
                        $window.toastr.success('Deleted a product picture');
                        $scope.product = updateProduct;
                    });
            }
        };

        $scope.deleteProduct = function(){
            productService.deleteProduct($scope.product._id)
                .$promise
                .then(function(data) {
                    $window.toastr.success('Deleted product');
                    $state.go('Product.List');
                });
        };
    }
]);
