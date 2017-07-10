angular.module('pintree')
  .factory('User',  ['Restangular', function(Restangular) {
        'use strict';
        return {
            get: function () {
                return Restangular.one('user').one('info').get();
            },
            favorVegetation: function(vegetationids) {
                return Restangular.one('user').one('reg').post('favor', {
                    vegetationids: vegetationids
                });
            },
            unfavorVegetation: function(vegetationids) {
                return Restangular.one('user').one('reg').post('favor', {
                    vegetationids: vegetationids
                });
            }
        };
    }]);
