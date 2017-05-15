'use strict';

angular.module('pintree')
  .factory('User',  ['Restangular', function(Restangular) {
        return {
            get: function () {
                return Restangular.one('users','me').get();
            }
        }
    }]);
