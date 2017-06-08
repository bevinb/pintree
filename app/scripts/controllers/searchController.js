'use strict';

angular.module('pintree').controller('SearchCtrl', ['$rootScope', '$scope', '$routeParams', '$timeout', 'utilService', 'constants', 'vegetationService',
    function($rootScope, $scope, $routeParams, $timeout, utilService, constants, vegetationService) {

    $scope.searchParams = $rootScope.searchParam;
    $scope.currentTree = null;

    $scope.mode = 'view';

    $scope.vegetations = [];

    $scope.selections = [];

    $scope.changeMode = function(mode){
        $scope.mode = mode;
    };

    $scope.toggleSelection = function(item){
        if($scope.mode != 'download'){
            $scope.currentTree = item;
            return;
        }
        for(var i = 0; i < $scope.selections.length; ++i){
            if($scope.selections[i] == item)break;
        }
        if(i < $scope.selections.length) {
            $scope.selections.splice(i, 1);
            delete item.isChecked;
        } else {
            $scope.selections.push(item);
            item.isChecked = true;
        }
    };

    $scope.download = function(){
        $scope.mode = mode;
    };

    $scope.startDownload = function(item){
        for(var i = 0; i < $scope.selections.length; ++i){
            delete $scope.selections[i].isChecked;
        }
        $scope.selections = [];
        $scope.mode = 'view';
    };

    $scope.cancelDownload = function(item){
        for(var i = 0; i < $scope.selections.length; ++i){
            delete $scope.selections[i].isChecked;
        }
        $scope.selections = [];
        $scope.mode = 'view';
    };


    $scope.$on("search", function (event, data) {
        /*vegetationService.getAll($scope.searchParams, function(resp){
            $scope.vegetations = resp.Data;
        });
        */
        if(data.params.keyword) {
            vegetationService.simpleSearch(data.params, function (resp) {
                $scope.vegetations = resp.Data;
            });
        } else {
            vegetationService.getAll(data, function (resp) {
                $scope.vegetations = resp.Data;
            });
        }
     });

    (function(){

    })();

}]);