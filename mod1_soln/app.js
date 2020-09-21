(function () {
    'use strict'

    // step 7
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    // step 10
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.placeholder = "List comma separated dishes you usually have for lunch";
        $scope.getMessage = function () {
            // implementation here
            return "blah"
        }
    }


})();
