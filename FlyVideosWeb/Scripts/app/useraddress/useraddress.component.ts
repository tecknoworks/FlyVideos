'use strict';

// UserAddress `useraddress` component, along with its associated controller and template
angular.
    module('useraddress').
    component('useraddress', {
        templateUrl: 'scripts/app/useraddress/useraddress.template.html',
        controller: ['$http', UserAddressController]
    });