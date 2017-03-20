class RegisterController extends LogInController  {
    public RegisterVM: RegisterModel;
    
    constructor($http: ng.IHttpService, $window: ng.IWindowService, $scope: IScope) {
        super($http, $window, $scope);
        this.initialize();
        this.RegisterVM = new RegisterModel();
        this.HttpService = $http;
    }

    public RegisterClick(): void {
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

        var config: angular.IRequestShortcutConfig = {
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
        
    }

    public initialize(): void {
        this.loadScript('front.js');
        this.loadScript('bootstrap-hover-dropdown.js');
    }

    public loadScript(path: string) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    }
}

class RegisterModel {
    public Email: string;
    public Password: string
    public ConfirmPassword: string
    public ErrorMessage: string;
    public ShowError: boolean;
}