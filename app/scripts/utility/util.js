'use strict';

angular.module('pintree').service('utilService', ['$timeout', 'constants',
    function(timeout, constants) {

    this.formatTime = function(date){
        var day = new Date(Date.parse(date));
        return moment(day).format('HH:mm');
    };

}]);