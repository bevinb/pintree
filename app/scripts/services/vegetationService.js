/*
 * Services
 */
'use strict';

angular.module('pintree').factory('vegetationService', ['Restangular', 'constants','$cookies',
    function(Restangular, constants, $cookies) {

    return {
        getAll: function (params, cb) {
            Restangular.all('vegetation/search').customPOST(params).then(cb);
        },
        getById: function (id, cb) {
            Restangular.one('vegetation', '{' + id + '}').get().then(cb);
        },
        getComments: function (params, cb) {
            Restangular.one('vegetation', '{' + params.id + '}').one('comments/{' +
                params.skip + '}/{' + params.limit + '}').get({

            }).then(cb);
        },
        getAppendixes: function (params, cb) {
            Restangular.one('vegetation', '{' + params.id + '}').one('appendixes').get({

            }).then(cb);
        },
    }
}]);
