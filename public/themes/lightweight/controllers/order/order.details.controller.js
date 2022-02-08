(function() {
    'use strict';
    angular.module('lightweight').controller('OrderDetailsController',['$scope', '$location', '$stateParams', '$window', '$timeout', 'OrderService',
    function($scope, $location, $stateParams, $window, $timeout, OrderService) {

        var orderId = $stateParams.orderId;

        $scope.getOrderById = function(orderId) {
            OrderService.getOrderById(orderId)
                .$promise
                .then(function(order) {
                    $scope.order = order;
                },
                function(error) {
                    $scope.order = '';
                });
        };

        $scope.getOrderById(orderId);

        $scope.printOrderSlip = function() {

            var pdf = new $window.jsPDF('p', 'pt', 'letter');
            var source = angular.element(document.querySelector('#orderInfo'))[0];

            var specialElementHandlers = {
                '#bypassme': function (element, renderer) {
                    return true;
                }
            };

            var margins = {
                top: 80,
                bottom: 60,
                left: 40,
                width: 522
            };
            pdf.fromHTML(
                source,
                margins.left,
                margins.top, {
                    'width': margins.width,
                    'elementHandlers': specialElementHandlers
                },

                function (dispose) {
                    pdf.output('dataurlnewwindow');
                },
                margins
            );
        };

    }]);
})();
