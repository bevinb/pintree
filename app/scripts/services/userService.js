angular.module('pintree')
  .factory('User',  ['Restangular', function(Restangular) {
        'use strict';
        return {
            get: function () {
                return Restangular.one('user').one('info').get();
            }
        };
    }]);
