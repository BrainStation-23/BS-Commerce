'use strict';

/* jshint -W098 */
angular.module('mean.shopCategory').controller('ShopCategoryController', ['$scope', '$state', 'Global', 'ShopCategory', 'ShopProduct', 'cartService',
  function($scope, $state, Global, ShopCategory, ShopProduct, cartService) {
    var slug = $state.params.slug;
    $scope.global = Global;

    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.state={
      totalRecords:0,
      pageSize:6,
      currentPage : 1,
      orderBy:{
        value: 'name',
        text: 'Name'
      }
    };

    $scope.products = [];
    $scope.category = ShopCategory.get({id: slug});

    var updateCartStatus = function(){
      cartService.getCart()
        .$promise
        .then(function(cart){
          _.forEach($scope.products, function(product){
            var indexInCart = _.findIndex(cart.items, function(item){
              return item.product._id === product._id;
            });

            product.addedToCart = indexInCart >= 0;
          });
        });

    };

    var updateProducts = function(){
      ShopProduct.query({
        slug:slug,
        orderBy: $scope.state.orderBy.value,
        pageSize: $scope.state.pageSize,
        currentPage: $scope.state.currentPage
      },function(data, getHeader){
        $scope.products = data;
        $scope.state.totalRecords = getHeader().total;

        updateCartStatus();
      });
    };
    updateProducts();

    $scope.pageChanged = function(){
      updateProducts();
    };

    $scope.setPageSize = function(pageSize, event){
      event.preventDefault();

      $scope.state.currentPage = 1;
      $scope.state.pageSize = pageSize;
      updateProducts();
    };

    $scope.setOrderBy = function(text, value, event){
      event.preventDefault();

      $scope.state.currentPage = 1;
      $scope.state.orderBy.text = text;
      $scope.state.orderBy.value = value;

      updateProducts();
    };

    $scope.toggleCartStatus = function(product, event){
      event.preventDefault();

      product.addedToCart = !(product.addedToCart);

      if(product.addedToCart) {
        cartService.addToCart(product, 1);
      }else{
        cartService.removeFromCart(product);
      }

    };
  }
]);
