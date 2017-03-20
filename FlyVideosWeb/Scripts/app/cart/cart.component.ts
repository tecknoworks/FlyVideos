'use strict';

// Register `register` component, along with its associated controller and template
angular.
    module('cart').
    component('cart', {
        templateUrl: 'scripts/app/cart/cart.template.html',
        controller: [ '$window', '$scope', CartController]
    });