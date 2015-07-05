'use strict';

angular.module('mean.shopAdmin').controller('brandCreateController', ['$scope', 'Global', '$http', '$state',
    function($scope, Global, $http, $state) {

        console.log('brandCreateController');


        // Info tab Page
        $scope.brand = {};




        $scope.create = function (brand) {
            console.log('add function');
            console.log(brand);
            brand.info.pageSizeOptions = brand.info.pageSizeOptions ? brand.info.pageSizeOptions.split(',') : [];
            brand.info.displayOrder = brand.info.displayOrder? brand.info.displayOrder : 0;
            brand.info.published = brand.info.published? brand.info.published : false;
            brand.info.allowToSelectPageSize = brand.info.allowToSelectPageSize? brand.info.allowToSelectPageSize : false;


            console.log(brand.info.displayOrder);


            $http.post('/api/brand/', {brand:brand})
                .success(function(data, status, headers, config){
                    console.log(data);
                    $state.go('Brand.List');
                })
                .error(function(data, status, headers, config){

                });



        };


    }
]);