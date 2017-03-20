var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserProfileController = (function (_super) {
    __extends(UserProfileController, _super);
    function UserProfileController($http) {
        _super.call(this, $http);
        this.UserProfileVM = new UserProfileModel();
        this.initialize();
        this.HttpService = $http;
        this.UserProfileVM.Firstname = "ana are mere";
        this.UserProfileVM.ShowError = true;
        this.UserProfileVM.ErrorMessage = "Error";
    }
    UserProfileController.prototype.DeliveryClick = function () {
        var self = this;
        self.UserProfileVM.ShowError = false;
        if (self.validateEmail(self.UserProfileVM.Email) !== true) {
            self.UserProfileVM.ErrorMessage = "Email address is not valid!";
            self.UserProfileVM.ShowError = true;
            return;
        }
        if (self.UserProfileVM.Email == null || self.UserProfileVM.Firstname == null || self.UserProfileVM.Lastname == null || self.UserProfileVM.Company == null || self.UserProfileVM.Street == null || self.UserProfileVM.City == null || self.UserProfileVM.ZIP == null || self.UserProfileVM.Country == null || self.UserProfileVM.Telephone == null) {
            self.UserProfileVM.ErrorMessage = "You have to complete all fields!";
            self.UserProfileVM.ShowError = true;
            return;
        }
        var config = {
            headers: {
                "dataType": "json",
                "contentType": "application/json"
            }
        };
        this.HttpService.post('api/UserDetails', {
            "Firstname": self.UserProfileVM.Firstname,
            "Lastname": self.UserProfileVM.Lastname,
            "Company": self.UserProfileVM.Company,
            "Street": self.UserProfileVM.Street,
            "City": self.UserProfileVM.City,
            "ZIP": self.UserProfileVM.ZIP,
            "Country": self.UserProfileVM.Country,
            "Telephone": self.UserProfileVM.Telephone,
            "Email": self.UserProfileVM.Email,
        }).then(function (response) {
            self.UserProfileVM.ErrorMessage = "";
        }).catch(function (response) {
            self.UserProfileVM.ErrorMessage = response.data.Message;
        });
    };
    UserProfileController.prototype.initialize = function () {
        this.loadScript('front.js');
        this.loadScript('bootstrap-hover-dropdown.js');
    };
    UserProfileController.prototype.loadScript = function (path) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    };
    return UserProfileController;
}(LogInController));
var UserProfileModel = (function () {
    function UserProfileModel() {
    }
    return UserProfileModel;
}());
