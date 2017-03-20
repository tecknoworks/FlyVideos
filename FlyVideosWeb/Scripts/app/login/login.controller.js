var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LogInController = (function (_super) {
    __extends(LogInController, _super);
    //protected ngAuthSettings: ngAuthSettings;
    function LogInController($http, $window, $scope) {
        _super.call(this, $window, $scope);
        this.LoginVM = new LogInModel();
        // this.ngAuthSettings = ngAuthSettings;
        this.HttpService = $http;
    }
    LogInController.prototype.LoginClick = function () {
        var self = this;
        self.LoginVM.ShowError = false;
        if (self.LoginVM.Email == null) {
            self.LoginVM.ErrorMessage = "Your Email field cannot be blank!";
            self.LoginVM.ShowError = true;
            return;
        }
        if (self.validateEmail((self.LoginVM).Email) !== true) {
            self.LoginVM.ErrorMessage = "Email address is not valid!";
            self.LoginVM.ShowError = true;
            return;
        }
        if (self.validatePassword(self.LoginVM.Password) !== true) {
            self.LoginVM.ErrorMessage = "Password is not valid!";
            self.LoginVM.ShowError = true;
            return;
        }
        var dto = new LogInDto(self.LoginVM.Email, self.LoginVM.Password);
        var json = JSON.stringify(dto);
        $.ajax({
            type: "POST",
            //contentType: "application/json",
            headers: {},
            url: "/token",
            data: dto,
            success: function (result) {
                var user = new UserModel();
                user.token = result.access_token;
                user.email = result.userName;
                user.tokenType = result.token_type;
                var userJson = JSON.stringify(user);
                localStorage.setItem('flyvideosUser', userJson);
                self.IWindowService.location.href = '/index.html#!/home';
            },
            complete: function (result) {
            },
            error: function (err) {
                var response = JSON.parse(err.responseText);
                self.LoginVM.ErrorMessage = response.Message;
                self.LoginVM.ShowError = true;
            },
            dataType: "json"
        });
    };
    LogInController.prototype.validatePassword = function (password) {
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(password);
    };
    LogInController.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    LogInController.prototype.authExternalProvider = function (provider) {
        //var redirectUri = location.protocol + '//' + location.host + '/authcomplete.html';
        //var externalProviderUrl = this.ngAuthSettings.apiServiceBaseUri + "api/Account/ExternalLogin?provider=" + provider
        //   + "&response_type=token&client_id=" + this.ngAuthSettings.clientId
        //    + "&redirect_uri=" + redirectUri;
        //var url = "http://flyvid.com:12300/api/Account/ExternalLogin?provider=Facebook&response_type=token&client_id=ngAuthApp&redirect_uri=http://flyvid.com:12300/index.html#!/registerexternal";
        window.windowScope = this;
        var url = "http://flyvid.com:12300/api/Account/ExternalLogin?provider=Facebook&response_type=token&client_id=ngAuthApp&redirect_uri=http://flyvid.com:12300/authcomplete.html";
        var oauthWindow = window.open(url, "Authenticate Account", "location=0,status=0,width=600,height=750");
        //var oauthWindow = window.open(externalProviderUrl, "Authenticate Account", "location=0,status=0,width=600,height=750");
    };
    LogInController.prototype.authCompletedCB = function (fragment) {
        if (fragment.haslocalaccount == 'False') {
            //provider: fragment.provider,
            //    userName: fragment.external_user_name,
            //        externalAccessToken: fragment.external_access_token
            this.IWindowService.location.href = '/index.html#!/registerexternal?provider=' + fragment.provider + "&external_user_name=" + fragment.external_user_name + "&external_access_token" + fragment.external_access_token;
            debugger;
        }
    };
    return LogInController;
}(BaseController));
var LogInModel = (function () {
    function LogInModel() {
    }
    return LogInModel;
}());
var LogInDto = (function () {
    function LogInDto(email, password) {
        this.grant_type = 'password';
        this.username = email;
        this.password = password;
    }
    return LogInDto;
}());
var RegisterDataModel = (function () {
    function RegisterDataModel() {
    }
    return RegisterDataModel;
}());
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());
var RegisterUseraModel = (function () {
    function RegisterUseraModel() {
    }
    return RegisterUseraModel;
}());
var RegisterDataDto = (function () {
    function RegisterDataDto(email) {
        this.username = email;
    }
    return RegisterDataDto;
}());
//# sourceMappingURL=login.controller.js.map