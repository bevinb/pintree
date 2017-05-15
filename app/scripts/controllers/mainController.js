'use strict';

angular.module('pintree').controller('MainCtrl', ['$rootScope', '$scope', '$location', '$window', '$cacheFactory', 'Auth', 'alertService', 'utilService', 'carsService', 'constants',
    function($rootScope, $scope, $location, $window, $cacheFactory, Auth, alertService, utilService, carsService, constants) {

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

    $scope.initBroadcastInput = function(input){
        $(input).autocomplete({
            minLength: 0,
            autoFocus: true,
            source: constants.BROADCAST_OPTIONS
        });
    };
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
