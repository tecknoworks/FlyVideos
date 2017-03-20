'use strict';
// Register `register` component, along with its associated controller and template
angular.
    module('register').
    component('register', {
    templateUrl: 'scripts/app/register/register.template.html',
    controller: ['$http', '$window', '$scope', RegisterController]
});
//# sourceMappingURL=register.component.js.map