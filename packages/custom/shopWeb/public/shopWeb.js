'use strict';

angular.module('mean.shopWeb', ['mean.system'])
    .config(['$viewPathProvider', function($viewPathProvider) {
        $viewPathProvider.override('system/views/index.html', 'shopWeb/views/index.html');
    }]);


angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
    .controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function ($scope, $timeout, $transition, $q) {
    }]).directive('carousel', [function() {
        return {

        }
    }]);
