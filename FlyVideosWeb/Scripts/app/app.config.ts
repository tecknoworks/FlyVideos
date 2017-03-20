'use strict;'

angular.
    module('flyVideosApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
                when('/login', {
                    template: '<login></login>'
                }).
                when('/register', {
                    template: '<register></register>'
                }).
                when('/registerexternal', {
                    template: '<registerexternal></registerexternal>'
                }).
                when('/userprofile', {
                    template: '<userprofile></userprofile>'
                }).
                when('/useraddress', {
                    template: '<useraddress></useraddress>'
                }).
                when('/store', {
                    template: '<store></store>'
                }).
                when('/detail/:Id', {
                    template: '<detail></detail>'
                }).
                when('/cart', {
                    template: '<cart></cart>'
                }).
                when('/order', {
                    template: '<order></order>'
                }).
                when('/home', {
                   template: '<home></home>'
                }).
                otherwise('/home');
        }
    ]);