'use strict';

angular.module('mean.shopCategory').directive('shopCategorySubItem', ['Global', 'ShopCategory',
  function(Global, ShopCategory) {
    return{
      replace: true,
      scope:{
        category:'='
      },
      templateUrl: '/shopCategory/views/shop-category-widget/shop-category-sub-item.html',
      link: function(scope, element, attrs){

      }
    };
  }
]);
