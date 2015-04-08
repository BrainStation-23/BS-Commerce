'use strict';

angular.module('mean.shopCategory').directive('shopCategoryItem', ['Global', 'ShopCategory',
  function(Global, ShopCategory) {
    return{
      replace: true,
      scope:{
        category:'='
      },
      templateUrl: '/shopCategory/views/shop-category-widget/shop-category-item.html',
      link: function(scope, element, attrs){
      }
    };
  }
]);
