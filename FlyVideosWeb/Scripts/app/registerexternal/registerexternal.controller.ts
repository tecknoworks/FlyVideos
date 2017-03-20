class RegisterExternalController extends LogInController {
    public RegisterExternalVM: RegisterExternalModel;
    protected ILocationService: ng.ILocationService;
    constructor($http: ng.IHttpService, $window: ng.IWindowService, $location: ng.ILocationService, $scope: IScope) {
        super($http, $window, $scope);
        this.initialize();
        this.RegisterExternalVM = new RegisterExternalModel();
        this.HttpService = $http;
        this.ILocationService = $location;
       
    }

    public RegisterExternalClick(): void {
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
       
        var config: angular.IRequestShortcutConfig = {
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

class RegisterExternalModel {
    public Email: string;
    public provider: string
    public externalAccessToken: string
    public ErrorMessage: string;
    public ShowError: boolean;
}