angular.module('pintree').directive('advancedSearchFilter', ['$compile', 'utilService',
    function ($compile, utilService) {
    return  {
        restrict: 'EA',
        replace: false,
        require: 'ngModel',
        templateUrl:'partials/directive/advancedSearchFilter.html',
        scope: {
            value: '=ngModel',

            ngChange: '&'
        },
        compile: function compile(tElement, tAttrs, transclude) {

            return {
                pre: function(scope, element, iAttrs) {
                    scope.showAdvanced = false;
                    scope.toggleStatus = function(v, k){
                        scope.showAdvanced = !scope.showAdvanced;
                    };
                    scope.ok = function(v, k){
                        scope.showAdvanced = false;
                        scope.$emit("search", {params: {}});
                    };
                    scope.cancel = function(){
                        scope.showAdvanced = false;
                    };
                },

                post: function(scope, element, iAttrs, controller) {

                }
            }
        }
    };
}]);
