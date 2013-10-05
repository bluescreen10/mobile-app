'use strict';

var myApp = angular.module('myApp', ['ajoslin.mobile-navigate']);
//     .config(['$routeProvider'], function($routeProvider) {
//         $routeProvider.when('/', {templateUrl: 'partials/homeView.html' });
//         $routeProvider.otherwise({redirectTo: '/'});
//     }
// );

myApp.config(function($routeProvider) {
    $routeProvider.
        when('/', { conrtoller: 'HomeCtrl', templateUrl: 'partials/homeView.html'}).
        otherwise({redirectTo: '/'});
});

myApp.controller('HomeCtrl', function($scope) {

});
