'use strict';
var ProfileDataService = (function () {
    function ProfileDataService($http) {
        this._iHttpService = $http;
    }
    ProfileDataService.prototype.Get = function (url, caller, callback) {
        this._iHttpService.get(url, {}).then(function (response) {
            console.log(response);
            callback(response.data, caller);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ProfileDataService.prototype.Post = function (url, data, caller, callback) {
        this._iHttpService.post(url, { data: data, }).then(function (response) {
            console.log(response);
            callback(response.data, caller);
        }).catch(function (response) {
            // console.log(err);
        });
    };
    return ProfileDataService;
}());
angular.
    module('core.data').
    service('IProfileDataService', ['$http', ProfileDataService]);
//# sourceMappingURL=userprofile.service.js.map