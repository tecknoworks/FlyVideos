interface Window { windowScope: any; }

class LogInController extends BaseController {
    public LoginVM: LogInModel;
   
    protected HttpService: ng.IHttpService
    //protected ngAuthSettings: ngAuthSettings;
    constructor($http: ng.IHttpService, $window: ng.IWindowService, $scope: IScope) {
        super($window, $scope);
        this.LoginVM = new LogInModel();
       // this.ngAuthSettings = ngAuthSettings;
        this.HttpService = $http;
    }
    
    public LoginClick(): void {
        
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

        var dto: LogInDto = new LogInDto(self.LoginVM.Email, self.LoginVM.Password);
        var json = JSON.stringify(dto);

        $.ajax({
            type: "POST",
            //contentType: "application/json",
            headers: {},
            url: "/token",
            data: dto,
            success: function (result) {
              
                var user: UserModel = new UserModel();
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



    }

   protected validatePassword(password) : boolean {
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(password);
    }

    protected validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
   }

    protected authExternalProvider(provider: string) {

        //var redirectUri = location.protocol + '//' + location.host + '/authcomplete.html';
        //var externalProviderUrl = this.ngAuthSettings.apiServiceBaseUri + "api/Account/ExternalLogin?provider=" + provider
        //   + "&response_type=token&client_id=" + this.ngAuthSettings.clientId
        //    + "&redirect_uri=" + redirectUri;
        //var url = "http://flyvid.com:12300/api/Account/ExternalLogin?provider=Facebook&response_type=token&client_id=ngAuthApp&redirect_uri=http://flyvid.com:12300/index.html#!/registerexternal";

        window.windowScope = this;
        var url = "http://flyvid.com:12300/api/Account/ExternalLogin?provider=Facebook&response_type=token&client_id=ngAuthApp&redirect_uri=http://flyvid.com:12300/authcomplete.html";

        var oauthWindow = window.open(url, "Authenticate Account", "location=0,status=0,width=600,height=750");
        //var oauthWindow = window.open(externalProviderUrl, "Authenticate Account", "location=0,status=0,width=600,height=750");
    }
    
    public authCompletedCB(fragment) {
        if (fragment.haslocalaccount == 'False') {
            //provider: fragment.provider,
            //    userName: fragment.external_user_name,
            //        externalAccessToken: fragment.external_access_token
            

           


            this.IWindowService.location.href = '/index.html#!/registerexternal?provider=' + fragment.provider + "&external_user_name=" + fragment.external_user_name + "&external_access_token" + fragment.external_access_token;
            debugger
        }
    }
}

class LogInModel {
    public Email: string;
    public Password: string;
    public ErrorMessage: string;
    public ShowError: boolean;
    constructor() {  }
}

class LogInDto {
    public grant_type: string = 'password';
    public username: string;
    public password: string;
    constructor(email: string, password: string) {
        this.username = email;
        this.password = password;
    }
 }
class RegisterDataModel {
    public Email: string;
    public ErrorMessage: string;
    public ShowError: boolean;
    constructor() { }
}
class UserModel {
    public email: string;
    public name: string;
    public token: string;
    public tokenType: string;
}
class RegisterUseraModel {
    public email: string;
    public provider: string;
    public externalAccessToken: string;
}
class RegisterDataDto {
    public username: string;
    constructor(email: string) {
        this.username = email;
        
    }
}