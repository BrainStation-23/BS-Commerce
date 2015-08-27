'use strict';

angular.module('mean.shopUser').directive('shopUserProfileAddress', ['Global', 'ShopUser',
  function(Global, ShopUser) {
    return{
      replace: true,
      templateUrl: '/shopUser/views/profile/address.html',
      link: function(scope, element, attrs){
        scope.inputModel = {};
        scope.isNew = false;
        scope.currentEditIndex = -1;

        var cancelEdit = function(){
          scope.inputModel = {};
          scope.isNew = false;
          scope.currentEditIndex = -1;

          _.forEach(scope.user.addresses, function(address){
            address.isEditing = false;
          });
        };

        scope.edit = function(address){
          cancelEdit();
          scope.currentEditIndex = _.indexOf(scope.user.addresses, address);
          address.isEditing = !(address.isEditing);

          _.assign(scope.inputModel, address);
        };

        scope.update = function(address){
          _.assign(address, scope.inputModel);

          scope.updateProfile()
            .then(function(messages){
              cancelEdit();
            });
        };

        scope.delete = function(address){
          var index = _.indexOf(scope.user.addresses, address);
          scope.user.addresses.splice(index,1);

          scope.updateProfile();
        };

        scope.cancel = function(address){
          if(scope.isNew){
            var index = _.indexOf(scope.user.addresses, address);
            scope.user.addresses.splice(index, 1);
          }
          cancelEdit();

        };

        scope.addNew = function(){
          cancelEdit();
          scope.isNew = true;
          scope.inputModel.isEditing = true;

          scope.user.addresses.push(scope.inputModel);
          scope.currentEditIndex = scope.user.addresses.length - 1;
        };
      }
    };
  }
]);
