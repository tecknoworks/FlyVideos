interface IScope extends ng.IRootScopeService {
    userDetails: Array<any>;
}
class UserProfileController extends BaseController {
    public UserProfileVM: UserProfileModel;
    protected HttpService: ng.IHttpService;
     constructor($http: ng.IHttpService, $window: ng.IWindowService, $scope: IScope) {
         super($window, $scope);
         this.UserProfileVM = new UserProfileModel();
         this.HttpService = $http;
         var self = this;
         this.initialize();
       
         var config: angular.IRequestShortcutConfig = {
             headers: {
                 "Authorization": 'Bearer ' + this.currentUser.token,
             }
         }
        
         this.HttpService.get(" api/UserDetails/?username=" + this.currentUser.email, config).then(function (response: any) {
            
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

    public SaveClick(): void {
        var self = this;
        self.UserProfileVM.ShowError = false;
      
        if (self.UserProfileVM.FirstName == null || self.UserProfileVM.LastName == null || self.UserProfileVM.Address == null || self.UserProfileVM.City == null || self.UserProfileVM.Country == null || self.UserProfileVM.Phone_No == null) {
            self.UserProfileVM.ErrorMessage = "you have to complete all fields!";
            self.UserProfileVM.ShowError = true;
            return;
        }
       
        var config: angular.IRequestShortcutConfig = {
            headers: {
                "dataType": "json",
                "contentType": "application/json",
                "Authorization": 'Bearer ' + self.currentUser.token,
            }
        };

        this.HttpService.post('api/UserDetails' , {
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
       
      
    }

    //public initialize(): void {
    //    this.loadScript('front.js');
    //    this.loadScript('bootstrap-hover-dropdown.js');
    //}

    public initialize(): void {
        var self = this;
        
        setTimeout(function () {
            self.loadScript('front.js');
            this.loadScript('bootstrap-hover-dropdown.js');
        }, 1000);
    }
    public loadScript(path: string) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    }
   
}
class UserProfileModel {
    public IdUser: string;
    public FirstName: string;
    public LastName: string;
    public Address: string;
    public City: string;
    public Country: string;
    public Phone_No: number;
    public ErrorMessage: string;
    public ShowError: boolean;
    public Drones: Array<DroneDto>;
}
class DroneDto {
    public Id: number;
    public Name: string;
    public Description: string;
    public Price: number;
    public OneImage: string;
    public BigImage: string;
    public TwoImage: string;
}
