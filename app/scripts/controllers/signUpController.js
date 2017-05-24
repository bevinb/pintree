angular.module('pintree').controller('SignUpCtrl', ['$scope', '$window', 'Auth', 'alertService',
    function ($scope, $window, Auth, alertSerUpvice) {

    $scope.signup = function () {
        Auth.signup({
            Email: $scope.Email,
            Username: $scope.Username,
            Password: $scope.Password,
            SecurityCode: $scope.SecurityCode
        }).then(function () {
            $window.location.href = '#/';
        }).catch(function (err) {
            console.log(err);
        })
    };

    $scope.dismissModal = function(result) {
        $('.signin-popup').hide();
    };
}]);