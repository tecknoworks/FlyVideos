var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserProfileController = (function (_super) {
    __extends(UserProfileController, _super);
    function UserProfileController($http, $window, $scope) {
        _super.call(this, $window, $scope);
        this.UserProfileVM = new UserProfileModel();
        this.HttpService = $http;
        var self = this;
        this.initialize();
        var config = {
            headers: {
                "Authorization": 'Bearer ' + this.currentUser.token,
            }
        };
        this.HttpService.get(" api/UserDetails/?username=" + this.currentUser.email, config).then(function (response) {
            console.log(response.data);
            self.UserProfileVM.FirstName = response.data.FirstName;
            self.UserProfileVM.LastName = response.data.LastName;
            self.UserProfileVM.Address = response.data.Address;
            self.UserProfileVM.City = response.data.City;
            self.UserProfileVM.Country = response.data.Country;
            self.UserProfileVM.Phone_No = response.data.Phone_No;
            self.UserProfileVM.IdUser = response.data.IdUser;
            self.UserProfileVM.Drones = response.data.Drones;
            //  console.log(self.scope.$root.userDetails);
        }).catch(function (err) {
            console.log(err);
        });
    }
    UserProfileController.prototype.SaveClick = function () {
        var self = this;
        self.UserProfileVM.ShowError = false;
        if (self.UserProfileVM.FirstName == null || self.UserProfileVM.LastName == null || self.UserProfileVM.Address == null || self.UserProfileVM.City == null || self.UserProfileVM.Country == null || self.UserProfileVM.Phone_No == null) {
            self.UserProfileVM.ErrorMessage = "you have to complete all fields!";
            self.UserProfileVM.ShowError = true;
            return;
        }
        var config = {
            headers: {
                "dataType": "json",
                "contentType": "application/json",
                "Authorization": 'Bearer ' + self.currentUser.token,
            }
        };
        this.HttpService.post('api/UserDetails', {
            "FirstName": self.UserProfileVM.FirstName,
            "LastName": self.UserProfileVM.LastName,
            "Phone_No": self.UserProfileVM.Phone_No,
            "Address": self.UserProfileVM.Address,
            "City": self.UserProfileVM.City,
            "Country": self.UserProfileVM.Country,
            "IdUser": self.UserProfileVM.IdUser,
        }).then(function (response) {
            self.UserProfileVM.ErrorMessage = "";
            console.log(response.data);
        }).catch(function (response) {
            console.log(response.data);
            self.UserProfileVM.ErrorMessage = response.data.Message;
        });
    };
    //public initialize(): void {
    //    this.loadScript('front.js');
    //    this.loadScript('bootstrap-hover-dropdown.js');
    //}
    UserProfileController.prototype.initialize = function () {
        var self = this;
        setTimeout(function () {
            self.loadScript('front.js');
            this.loadScript('bootstrap-hover-dropdown.js');
        }, 1000);
    };
    UserProfileController.prototype.loadScript = function (path) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    };
    return UserProfileController;
}(BaseController));
var UserProfileModel = (function () {
    function UserProfileModel() {
    }
    return UserProfileModel;
}());
var DroneDto = (function () {
    function DroneDto() {
    }
    return DroneDto;
}());
//# sourceMappingURL=userprofile.controller.js.map