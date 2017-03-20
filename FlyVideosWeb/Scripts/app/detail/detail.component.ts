'use strict';

// Register `register` component, along with its associated controller and template
angular.
    module('detail').
    component('detail', {
        templateUrl: 'scripts/app/detail/detail.template.html',
        controller: ['$http', '$routeParams','$window','$scope',DetailController]
    });