'use strict';

angular.module('pintree').controller('MainCtrl', ['$rootScope', '$scope', '$location', '$window', '$cacheFactory', '$timeout', 'alertService', 'utilService', 'ModalService', 'constants',
    function($rootScope, $scope, $location, $window, $cacheFactory, $timeout, alertService, utilService, ModalService, constants) {

    $scope.searchParams = {};

    $scope.keyword = '';

    $scope.alarmsOn = false;

    //register keydown event to send broadcast

    $scope.doSearch = function(){
        //$scope.$apply(function(){
            $scope.searchParams.keyword = $scope.keyword;
        //});
        $scope.$broadcast("search", {params: $scope.searchParams});
    };

    $scope.showLogInModal = function() {
        ModalService.showModal({
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).then(function(modal) {
            // The modal object has the element built, if this is a bootstrap modal
            // you can call 'modal' to show it, if it's a custom modal just show or hide
            // it as you need to.
            modal.element.show();
            modal.close.then(function(result) {
                $scope.message = result ? "You said Yes" : "You said No";
            });
        });
    };

        $scope.showSignUpModal = function() {
            ModalService.showModal({
                templateUrl: "partials/signup.html",
                controller: "SignUpCtrl"
            }).then(function(modal) {
                // The modal object has the element built, if this is a bootstrap modal
                // you can call 'modal' to show it, if it's a custom modal just show or hide
                // it as you need to.
                modal.element.show();
                modal.close.then(function(result) {
                });
            });
        };

        $scope.setKeyword = function(target){
            if(target.getAttribute('search-link')) {
                $scope.keyword = target.getAttribute('search-link');
                $scope.doSearch();
            }
        };


        $timeout(function(){
            $('.quick-search-bar .wrapper').slick({
                infinite: false,
                slidesToShow: 8,
                slidesToScroll: 1
            });
        }, 1);


        /*
        $(document).keydown(function(e){
            alert(222)
            if(e.which == 13){
                var target = $(e.target);
                var targetCar = target.attr('broadcast-target-car');
                //if(targetCar && target.val()){
                    carsService.sendBroadcast(111, 222, function(){});
                //}
            }
        });
        */


}]);
