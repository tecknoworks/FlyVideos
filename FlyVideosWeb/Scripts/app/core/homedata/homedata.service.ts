'use strict';

interface IDataService {
    Get(url: string, caller: any, callback: Function): any;
}

class DataService implements IDataService {
    private _iHttpService: ng.IHttpService;
    constructor($http: ng.IHttpService) {
        this._iHttpService = $http;
    }

    public Get(url: string, caller: any, callback: Function): any {
        this._iHttpService.get(
            url, {}).then(function (response) {
                console.log(response);
                callback(response.data, caller);
            }).catch(function (err) {
                console.log(err);
            });
    }
}

angular.
    module('core.data').
    service('IDataService', ['$http', DataService]);
