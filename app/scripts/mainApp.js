var pintree = angular.module('pintree', ['wu.masonry', 'ngRoute', 'ngCookies', 'restangular', 'ui.bootstrap', 'ngSanitize',
    'angular-loading-bar','angularMoment', 'angularModalService', 'infinite-scroll']);

pintree.config(['$routeProvider', 'RestangularProvider', '$httpProvider', 'constants',
    function ($routeProvider, RestangularProvider, $httpProvider, constants) {

    RestangularProvider.setBaseUrl(constants.BASE_URL);
    RestangularProvider.setDefaultHttpFields({cache: false});

    $routeProvider.when('/', {
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl'
    }).when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
    }).otherwise({
        redirectTo: '/'
    });

    $httpProvider.interceptors.push('authInterceptor');
}]).factory('authInterceptor', ['$rootScope', '$q', '$cookies', '$location',function ($rootScope, $q, $cookies, $location) {
    return {
        // Add authorization token to headers
        request: function (config) {
            config.headers = config.headers || {};
            if ($cookies.get('token')) {
                config.headers.token = $cookies.get('token');
            }
            return config;
        },

        // Intercept 401s and redirect you to login
        responseError: function (response) {
            if (response.status === 403) {
                $location.path('/login');
                // remove any stale tokens
                $cookies.remove('token');
                $rootScope.$broadcast("logout.event");
                return $q.reject(response);
            }
            else {
                return $q.reject(response);
            }
        }
    };
}]).run(['constants', '$rootScope','$interval','$cookies', function ( constants, $rootScope, $interval,$cookies) {
}]);