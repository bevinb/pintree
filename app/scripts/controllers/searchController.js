'use strict';

angular.module('pintree').controller('SearchCtrl', ['$rootScope', '$scope', '$routeParams', '$timeout', 'utilService', 'constants', 'vegetationService',
function($rootScope, $scope, $routeParams, $timeout, utilService, constants, vegetationService) {

    $scope.pageSize = 20;
    $scope.startIndex = 0;
    $scope.searchParams = {};
    $scope.currentTree = null;

    $scope.mode = 'view';

    $scope.loading = false;

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
        $scope.mode = 'download';
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
        $scope.vegetations = [];
        if(data.params.keyword) {
            $scope.searchParams = angular.extend(data.params, {
                Limit: $scope.pageSize,
                Skip: $scope.startIndex
            });
            $scope.doSearch = function() {
                $scope.loading = true;
                vegetationService.simpleSearch(data.params, function (resp) {
                    $scope.vegetations = $scope.vegetations.concat(resp.Data);
                    $scope.searchParams.Skip += $scope.pageSize;
                    $scope.loading = false;
                });
            };
        } else {
            $scope.searchParams = angular.extend(data, {
                Limit: $scope.pageSize,
                Skip: $scope.startIndex
            });
            $scope.doSearch = function() {
                $scope.loading = true;
                vegetationService.getAll($scope.searchParams, function (resp) {
                    $scope.vegetations = $scope.vegetations.concat(resp.Data);
                    $scope.searchParams.Skip += $scope.pageSize;
                    $scope.loading = false;
                });
            };
        }
        $scope.doSearch();
     });

    (function(){

    })();

}]);