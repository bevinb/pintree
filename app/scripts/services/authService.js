'use strict';

angular.module('pintree')
    .factory('Auth',['$location', '$rootScope', 'Restangular', 'User', '$cookies','$q', '$http',
        function Auth($location, $rootScope, Restangular, User, $cookies,$q, $http) {
        var currentUser = {};
        if ($cookies.get('token')) {
            User.get()
                .then(function(user){
                    currentUser = user;
                });
        }

        return {
            login: function (user) {
                var deferred = $q.defer();
                var that = this;
                $http({
                    url:'/api/auth/login',
                    method:'GET',
                    params: {
                        username: user.username,
                        password: user.password
                    }
                }).then(function(resp){
                    $cookies.put('token', resp.headers('token'));
                    currentUser = resp.data;
                    $rootScope.$broadcast("login.event");
                    deferred.resolve(currentUser);
                }, function(resp){
                    that.logout();
                    deferred.reject(resp);
                });
                return deferred.promise;
            },

            logout: function () {
                var deferred = $q.defer();
                $http({
                    url:'/api/auth/logout',
                    method:'GET'
                }).then(function(resp){
                    $cookies.remove('token');
                    currentUser = {};
                    $rootScope.$broadcast("logout.event");
                }, function(resp){
                    deferred.reject(resp);
                });
                return deferred.promise;
            },

            signup: function (user) {
                var deferred = $q.defer();
                var that = this;
                $http({
                    url:'/api/sinup',
                    method:'POST',
                    params: {
                        Email: user.username,
                        Password: user.password,
                        SecurityCode: "string",
                        Username: string
                    }
                }).then(function(resp){
                    $cookies.put('token', resp.headers('token'));
                    currentUser = resp.data;
                    $rootScope.$broadcast("login.event");
                    deferred.resolve(currentUser);
                }, function(resp){
                    that.logout();
                    deferred.reject(resp);
                });
                return deferred.promise;
            },

            getSecurityCode: function (email) {
                var deferred = $q.defer();
                var that = this;
                $http({
                    url:'/api/code/{' + email + '}',
                    method:'GET'
                }).then(function(resp){
                    deferred.resolve(resp);
                }, function(resp){
                    that.logout();
                    deferred.reject(resp);
                });
                return deferred.promise;
            },

            /**
             * Gets all available info on authenticated user
             *
             * @return {Object} user
             */
            getCurrentUser: function () {
                return currentUser;
            },

            /**
             * Check if a user is logged in
             *
             * @return {Boolean}
             */
            isLoggedIn: function () {
            },


            /**
             * Check if a user is an admin
             *
             * @return {Boolean}
             */
            isAdmin: function () {
            },

            /**
             * Get auth token
             */
            getToken: function () {
                return $cookies.get('token');
            }
        };
    }]);
