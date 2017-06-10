angular.module('pintree').controller('SignUpCtrl', ['$scope', '$window', 'Auth', 'alertService',
    function ($scope, $window, Auth, alertService) {

    $scope.step = 1;

    $scope.getSecurityCode = function () {
        Auth.getSecurityCode($scope.Email).then(function () {
            $scope.step = 2;
            alertService.add({
                msg: '验证码已发送至您的邮箱，请登录查收！',
                type: "success"
            });
        }).catch(function (err) {
            console.log(err);
        });
    };

    $scope.signup = function () {
        Auth.signup({
            Email: $scope.Email,
            Username: $scope.Username,
            Password: $scope.Password,
            SecurityCode: $scope.SecurityCode
        }).then(function () {
            $window.location.href = '#/';
        }).catch(function (err) {
            alertService.add({
                msg: err.msg,
                type: "danger"
            });
        });
    };

    $scope.dismissModal = function(result) {
        $('.signin-popup').hide();
    };
}]);