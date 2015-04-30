'use strict';

angular.module('mean.shopWeb', ['mean.system'])
    .config(['$viewPathProvider', function($viewPathProvider) {
        $viewPathProvider.override('system/views/index.html', 'shopWeb/views/index.html');
    }]);
