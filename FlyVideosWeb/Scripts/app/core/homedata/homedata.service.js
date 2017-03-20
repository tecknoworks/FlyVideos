'use strict';
var DataService = (function () {
    function DataService($http) {
        this._iHttpService = $http;
    }
    DataService.prototype.Get = function (url, caller, callback) {
        this._iHttpService.get(url, {}).then(function (response) {
            console.log(response);
            callback(response.data, caller);
        }).catch(function (err) {
            console.log(err);
        });
    };
    return DataService;
}());
angular.
    module('core.data').
    service('IDataService', ['$http', DataService]);
//# sourceMappingURL=homedata.service.js.map