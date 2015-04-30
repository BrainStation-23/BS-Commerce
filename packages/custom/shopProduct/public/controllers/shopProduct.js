'use strict';

/* jshint -W098 */
angular.module('mean.shopProduct').controller('ShopProductController', ['$scope', '$state', 'Global', 'ShopProduct',
  function($scope, $state, Global, ShopProduct) {
    $scope.global = Global;
    var sku = $state.params.sku;

    $scope.product = null;
    $scope.slides = [];

    ShopProduct.get({id: sku}, function(product){
      $scope.product = product;

      $scope.slides = _.map(product.photos, function(photo){
        return {
          image: '/api/products/photos/' + photo
        };
      });
    });


  }
]);
