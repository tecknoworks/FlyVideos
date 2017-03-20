var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RegisterExternalController = (function (_super) {
    __extends(RegisterExternalController, _super);
    function RegisterExternalController($http, $window, $location, $scope) {
        _super.call(this, $http, $window, $scope);
        this.initialize();
        this.RegisterExternalVM = new RegisterExternalModel();
        this.HttpService = $http;
        this.ILocationService = $location;
    }
    RegisterExternalController.prototype.RegisterExternalClick = function () {
        var self = this;
        self.RegisterExternalVM.ShowError = false;
        if (self.RegisterExternalVM.Email == null) {
            self.RegisterExternalVM.ErrorMessage = "Your Email field cannot be blank!";
            self.RegisterExternalVM.ShowError = true;
            return;
        }
        if (self.validateEmail(self.RegisterExternalVM.Email) !== true) {
            self.RegisterExternalVM.ErrorMessage = "Email address is not valid!";
            self.RegisterExternalVM.ShowError = true;
            return;
        }
        var config = {
            headers: {
                "dataType": "json",
                "contentType": "application/json"
            }
        };
        this.HttpService.post('api/Account/RegisterExternal', {
            "Email": self.RegisterExternalVM.Email,
        }).then(function (response) {
            self.RegisterExternalVM.ErrorMessage = "";
        }).catch(function (response) {
            self.RegisterExternalVM.ErrorMessage = response.data.Message;
        });
    };
    RegisterExternalController.prototype.initialize = function () {
        this.loadScript('front.js');
        this.loadScript('bootstrap-hover-dropdown.js');
    };
    RegisterExternalController.prototype.loadScript = function (path) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    };
    return RegisterExternalController;
}(LogInController));
var RegisterExternalModel = (function () {
    function RegisterExternalModel() {
    }
    return RegisterExternalModel;
}());
//# sourceMappingURL=registerexternal.controller.js.map