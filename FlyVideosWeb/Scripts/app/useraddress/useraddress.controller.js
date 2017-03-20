var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserAddressController = (function (_super) {
    __extends(UserAddressController, _super);
    function UserAddressController($http, $window, $scope) {
        _super.call(this, $http, $window, $scope);
        this.UserAddressVM = new UserAddressModel();
        this.initialize();
        this.HttpService = $http;
        this.UserAddressVM.Firstname = "ana are mere";
        this.UserAddressVM.ErrorMessage = "Error";
    }
    UserAddressController.prototype.DeliveryClick = function () {
        var self = this;
        self.UserAddressVM.ShowError = false;
        if (self.validateEmail(self.UserAddressVM.Email) !== true) {
            self.UserAddressVM.ErrorMessage = "Email address is not valid!";
            self.UserAddressVM.ShowError = true;
            return;
        }
        if (self.UserAddressVM.Email == null || self.UserAddressVM.Firstname == null || self.UserAddressVM.Lastname == null || self.UserAddressVM.Company == null || self.UserAddressVM.Street == null || self.UserAddressVM.City == null || self.UserAddressVM.ZIP == null || self.UserAddressVM.Country == null || self.UserAddressVM.Telephone == null) {
            self.UserAddressVM.ErrorMessage = "You have to complete all fields!";
            self.UserAddressVM.ShowError = true;
            return;
        }
        var config = {
            headers: {
                "dataType": "json",
                "contentType": "application/json"
            }
        };
        this.HttpService.post('api/UserDetails', {
            "Firstname": self.UserAddressVM.Firstname,
            "Lastname": self.UserAddressVM.Lastname,
            "Company": self.UserAddressVM.Company,
            "Street": self.UserAddressVM.Street,
            "City": self.UserAddressVM.City,
            "ZIP": self.UserAddressVM.ZIP,
            "Country": self.UserAddressVM.Country,
            "Telephone": self.UserAddressVM.Telephone,
            "Email": self.UserAddressVM.Email,
        }).then(function (response) {
            self.UserAddressVM.ErrorMessage = "";
        }).catch(function (response) {
            self.UserAddressVM.ErrorMessage = response.data.Message;
        });
    };
    UserAddressController.prototype.initialize = function () {
        this.loadScript('front.js');
        this.loadScript('bootstrap-hover-dropdown.js');
    };
    UserAddressController.prototype.loadScript = function (path) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    };
    return UserAddressController;
}(LogInController));
var UserAddressModel = (function () {
    function UserAddressModel() {
    }
    return UserAddressModel;
}());
//# sourceMappingURL=useraddress.controller.js.map