class UserAddressController extends LogInController {
        public UserAddressVM: UserAddressModel;
        constructor($http: ng.IHttpService, $window: ng.IWindowService, $scope: IScope) {
            super($http, $window, $scope);
            
            this.UserAddressVM = new UserAddressModel();
            this.initialize();
            this.HttpService = $http;
            this.UserAddressVM.Firstname = "ana are mere";
          
            this.UserAddressVM.ErrorMessage = "Error";
        }
  
    public DeliveryClick(): void {
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
            var config: angular.IRequestShortcutConfig = {
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
class UserAddressModel {
    public Firstname: string;
    public Lastname: string;
    public Company: string;
    public Street: string;
    public City: string;
    public ZIP: string;
    public Country: string;
    public Telephone: number;
    public Email: string;
    public ErrorMessage: string;
    public ShowError: boolean;
}