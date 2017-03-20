'use strict';

interface IProfileDataService {
    Get(url: string, caller: any, callback: Function): any;
    Post(url: string, data:any ,caller: any, callback: Function): any;
   
  
}

class ProfileDataService implements IProfileDataService {
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
    public Post(url: string,data:any, caller: any, callback: Function): any {
        this._iHttpService.post(url, { data,}
        ).then(function (response) {
            console.log(response);
            callback(response.data, caller);
        }).catch(function (response) {
           // console.log(err);
        });
    }
    }

angular.
    module('core.data').
    service('IProfileDataService', ['$http', ProfileDataService]);
