angular.module('pintree').directive('detailModalViewer', ['$compile', 'utilService',
    function ($compile, utilService) {
    return  {
        restrict: 'EAC',
        replace: false,
        require: 'ngModel',
        templateUrl:'partials/directive/detailModalViewer.html',
        scope: {
            value: '=ngModel',
            onClose: '&'
        },
        compile: function compile(tElement, tAttrs, transclude) {

            return {
                pre: function(scope, element, iAttrs) {
                    scope.zoomed = false;
                    scope.toggleStatus = function(v, k){
                        scope.showAdvanced = !scope.showAdvanced;
                    };
                    scope.close = function(v, k){
                        scope.onClose();
                    };

                    scope.zoomIn = function(v, k){
                        scope.zoomed = true;
                    };

                    scope.zoomOut = function(v, k){
                        scope.zoomed = false;
                    };

                    function genBrick() {
                        var height = ~~(Math.random() * 500) + 100;
                        var id = ~~(Math.random() * 10000);
                        return {
                            src: 'http://lorempixel.com/g/280/' + height + '/?' + id
                        };
                    };

                    scope.relatedTrees = [
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
                },

                post: function(scope, element, iAttrs, controller) {

                }
            }
        }
    };
}]);
