angular.module('pintree').controller('LoginCtrl', ['$scope', '$window', 'Auth', 'alertService',
    function ($scope, $window, Auth, alertService) {

    $scope.doLogin = function () {
        Auth.login({
            username: $scope.username,
            password: $scope.password
        }).then(function () {
                $window.location.href = '#/';
        }).catch(function (err) {
            console.log(err);
            alertService.add({
                msg: '登录失败, 账号或密码错误！',
                type: "danger"
            });
        })
    };

    $scope.dismissModal = function(result) {
        $('.signin-popup').hide();
    };
}]);