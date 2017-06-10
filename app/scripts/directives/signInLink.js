angular.module('pintree').directive('signInLink', ['$compile', 'utilService',
    function ($compile, utilService) {
    return  {
        restrict: 'EA',
        replace: false,
        require: 'ngModel',
        templateUrl:'partials/directive/signInLink.html',
        scope: {
            value: '=ngModel'
        },
        compile: function compile(tElement, tAttrs, transclude) {

            return {
                pre: function(scope, element, iAttrs) {

                },

                post: function(scope, element, iAttrs, controller) {

                }
            };
        }
    };
}]);
