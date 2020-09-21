(function () {
    'use strict';

    // step 7
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    // step 10
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.placeholder = "List comma separated dishes you usually have for lunch"
        $scope.message = "";

        $scope.getMessage = function () {
            return "blah"
        };

        $scope.buttonClicked = function() {

            var ogPlaceholder = "List comma separated dishes you usually have for lunch";

            var items = $scope.placeholder.split(',');
            if ($scope.placeholder == "" || $scope.placeholder == ogPlaceholder) {
                $scope.message= "Please enter data first"
            }
            else if (items.length <= 2) {
                $scope.message = "Too Little!";
            }
            else if (items.length <= 3) {
                $scope.message = "Enjoy!";
            }
            else {
                $scope.message = "Too much!";
            }
        };
    }


})();
