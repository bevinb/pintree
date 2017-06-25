angular.module('pintree').directive('detailModalViewer', ['$compile', 'utilService', 'vegetationService',
    function ($compile, utilService, vegetationService) {
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
                    scope.close = function(v, k){
                        scope.onClose();
                    };

                    scope.zoomIn = function(v, k){
                        scope.zoomed = true;
                    };

                    scope.zoomOut = function(v, k){
                        scope.zoomed = false;
                    };
                },

                post: function(scope, element, iAttrs, controller) {

                }
            };
        },
        controller: function($scope){
            $scope.$watch('value', function(v){
                angular.element(document.body).toggleClass('modal-opened', !!v);
                if(!v)return;
                //$scope.relatedTrees = genBricks();
                vegetationService.getById(v.Id, function(resp){
                    $scope.currentTree = resp.Data;
                });
            });
        }
    };
}]);
