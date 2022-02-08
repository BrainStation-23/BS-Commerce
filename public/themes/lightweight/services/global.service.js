'use strict';

//Global service for global variables
angular.module('lightweight').factory('Global', [

    function() {
        var _this = this;
        _this._data = {
            user: window.user,
            authenticated: false,
            isAdmin: false,
            isRegistered: false
        };
        if (window.user && window.user.roles && window.user.roles.length) {
            _this._data.authenticated = true;
            _this._data.isAdmin = window.user.roles.indexOf('admin') !== -1;
            _this._data.isRegistered = (window.user.roles.indexOf('admin') !== -1 || window.user.roles.indexOf('user') !== -1);
        }
        return _this._data;
    }
]);
