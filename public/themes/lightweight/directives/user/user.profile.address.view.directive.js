'use strict';

angular.module('lightweight').directive('userProfileAddress', ['Global', '_',
    function (Global, _) {
        return {
            replace: true,
            restrict: 'AE',
            templateUrl: 'themes/lightweight/views/user/settings/edit-address.html',
            link: function (scope, element, attrs) {
                scope.inputModel = {};
                scope.isNew = false;
                scope.currentEditIndex = -1;

                var cancelEdit = function () {
                    scope.inputModel = {};
                    scope.isNew = false;
                    scope.currentEditIndex = -1;

                    _.forEach(scope.user.addresses, function (address) {
                        address.isEditing = false;
                    });
                };

                scope.edit = function (address) {
                    cancelEdit();
                    scope.currentEditIndex = _.indexOf(scope.user.addresses, address);
                    address.isEditing = !(address.isEditing);

                    _.assign(scope.inputModel, address);
                };

                scope.update = function (address) {
                    _.assign(address, scope.inputModel);

                    scope.updateUerInfo().$promise.then(function (messages) {
                        cancelEdit();
                    });
                };

                scope.delete = function (address) {
                    var index = _.indexOf(scope.user.addresses, address);
                    scope.user.addresses.splice(index, 1);

                    scope.updateUerInfo();
                };

                scope.cancel = function (address) {
                    if (scope.isNew) {
                        var index = _.indexOf(scope.user.addresses, address);
                        scope.user.addresses.splice(index, 1);
                    }
                    cancelEdit();

                };

                scope.addNew = function () {
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
