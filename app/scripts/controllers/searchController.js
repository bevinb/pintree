'use strict';

angular.module('pintree').controller('SearchCtrl', ['$rootScope', '$scope', '$routeParams', '$timeout', 'utilService', 'constants',
    function($rootScope, $scope, $routeParams, $timeout, utilService, constants) {

    $scope.searchParams = $rootScope.searchParam;
    $scope.currentTree = null;

    $scope.mode = 'view';

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
        //alert(data.params)
        $scope.bricks = [
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick(),
            genBrick()
        ];
     });

     function genBrick() {
        var height = ~~(Math.random() * 500) + 100;
        var id = ~~(Math.random() * 10000);
        return {
            src: 'http://lorempixel.com/g/280/' + height + '/?' + id
        };
    };

    $scope.bricks = [
        genBrick(),
        genBrick(),
        genBrick(),
        genBrick(),
        genBrick(),
        genBrick(),
        genBrick(),
        genBrick(),
        genBrick(),
        genBrick(),
        genBrick(),
        genBrick()
    ];



    $scope.remove = function remove() {
        $scope.bricks.splice(
            ~~(Math.random() * $scope.bricks.length),
            1
        )
    };

    (function(){

    })();

}]);