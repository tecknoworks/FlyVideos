var RegisterModule = (function () {
    function RegisterModule() {
        angular.module('register', [
            'ngRoute'
        ]);
    }
    return RegisterModule;
}());
var registerModule = new RegisterModule();
