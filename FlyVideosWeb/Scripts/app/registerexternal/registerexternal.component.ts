'use strict';

// Register `register` component, along with its associated controller and template
angular.
    module('registerexternal').
    component('registerexternal', {
        templateUrl: 'scripts/app/registerexternal/registerexternal.template.html',
        controller: ['$http', RegisterExternalController]
    });