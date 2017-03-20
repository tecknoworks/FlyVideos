var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RegisterController = (function (_super) {
    __extends(RegisterController, _super);
    function RegisterController($http, $window, $scope) {
        _super.call(this, $http, $window, $scope);
        this.initialize();
        this.RegisterVM = new RegisterModel();
        this.HttpService = $http;
    }
    RegisterController.prototype.RegisterClick = function () {
        var self = this;
        self.RegisterVM.ShowError = false;
        if (self.RegisterVM.Email == null) {
            self.RegisterVM.ErrorMessage = "Your Email field cannot be blank!";
            self.RegisterVM.ShowError = true;
            return;
        }
        if (self.RegisterVM.Password !== self.RegisterVM.ConfirmPassword) {
            self.RegisterVM.ErrorMessage = "The password must be the same!";
            self.RegisterVM.ShowError = true;
            return;
        }
        if (self.validateEmail(self.RegisterVM.Email) !== true) {
            self.RegisterVM.ErrorMessage = "Email address is not valid!";
            self.RegisterVM.ShowError = true;
            return;
        }
        if (self.validatePassword(self.RegisterVM.Password) !== true) {
            self.RegisterVM.ErrorMessage = "Password is not valid!";
            self.RegisterVM.ShowError = true;
            return;
        }
        var config = {
            headers: {
                "dataType": "json",
                "contentType": "application/json"
            }
        };
        this.HttpService.post('api/Account/Register', {
            "Email": self.RegisterVM.Email,
            "Password": self.RegisterVM.Password,
            "ConfirmPassword": self.RegisterVM.ConfirmPassword,
        }).then(function (response) {
            self.IWindowService.location.href = '/index.html#!/home';
            self.RegisterVM.ErrorMessage = "you have successfully registered";
        }).catch(function (response) {
            self.RegisterVM.ErrorMessage = response.data.Message;
        });
    };
    RegisterController.prototype.initialize = function () {
        this.loadScript('front.js');
        this.loadScript('bootstrap-hover-dropdown.js');
    };
    RegisterController.prototype.loadScript = function (path) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    };
    return RegisterController;
}(LogInController));
var RegisterModel = (function () {
    function RegisterModel() {
    }
    return RegisterModel;
}());
//# sourceMappingURL=register.controller.js.map