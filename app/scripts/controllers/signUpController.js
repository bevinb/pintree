angular.module('pintree').controller('SignUpCtrl', ['$scope', '$window', 'Auth', 'alertService',
    function ($scope, $window, Auth, alertSerUpvice) {

    $scope.dismissModal = function(result) {
        $('.signin-popup').hide();
    };
}]);