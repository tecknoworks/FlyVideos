'use strict';

// userprofile `userprofile` component, along with its associated controller and template
angular.
    module('store').
    component('store', {
        templateUrl: 'scripts/app/store/store.template.html',
        controller: ['IDataService','$window', '$scope', StoreController]
        
    });