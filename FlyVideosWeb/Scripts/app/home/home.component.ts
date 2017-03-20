'use strict';

// Register `register` component, along with its associated controller and template
angular.
    module('home').
    component('home', {
        templateUrl: 'scripts/app/home/home.template.html',
        controller: ['IDataService', '$window','$scope', HomeController]
    });