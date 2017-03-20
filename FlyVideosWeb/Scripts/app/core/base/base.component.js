'use strict';
// Register `register` component, along with its associated controller and template
angular.
    module('base').
    component('base', {
    // templateUrl: 'scripts/app/register/register.template.html',
    controller: ['$http', BaseController]
});
