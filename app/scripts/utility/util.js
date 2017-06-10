angular.module('pintree').service('utilService', ['$timeout', 'constants', function(timeout, constants) {
    'use strict';
    this.formatTime = function(date){
        var day = new Date(Date.parse(date));
        return moment(day).format('HH:mm');
    };

}]);