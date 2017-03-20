class OrderController extends CartController {
    protected HttpService: ng.IHttpService;
    public OrderVM: OrderModel;
    public CartOrderVM: CartOrderModel;
    public OrderUserVM: OrderUserModel;
    public ShippingType: string = "UserAddress";
    public Payment: string = "Buy";
    constructor($http: ng.IHttpService,$window: ng.IWindowService, $scope: IScope) {
        super($window, $scope);
        this.HttpService = $http;
        this.OrderVM = new OrderModel;
        this.CartOrderVM = new CartOrderModel();
        this.OrderUserVM = new OrderUserModel();
       // this.DetailsVM.details=this.scope.$root.shoppingCart;
      
        this.CartOrderVM.order = this.scope.$root.shoppingCart;
      
        var self = this;
       
        var config: angular.IRequestShortcutConfig = {
            headers: {
                "Authorization": 'Bearer ' + this.currentUser.token,
            }
        }

        this.HttpService.get(" api/UserDetails/?username=" + this.currentUser.email, config).then(function (response: any) {
           
            self.OrderUserVM.FirstName = response.data.FirstName;
            self.OrderUserVM.LastName = response.data.LastName;
            self.OrderUserVM.Address = response.data.Address;
            self.OrderUserVM.City = response.data.City;
            self.OrderUserVM.Country = response.data.Country;
            self.OrderUserVM.Phone_No = response.data.Phone_No;
            self.OrderUserVM.IdUser = response.data.IdUser;
            self.OrderUserVM.Drones = response.data.Drones;
            
           
          

           
        }).catch(function (err) {
            console.log(err);
            });

    }
    public PlaceOrder() {
        var self = this;
        var config: angular.IRequestShortcutConfig = {
            headers: {
                "dataType": "json",
                "contentType": "application/json",
                "Authorization": 'Bearer ' + self.currentUser.token,
            }
        };

        var DroneIds: Array<number> = new Array<number>();
        for (var i = 0; i < this.CartOrderVM.order.length; i++)
        {
            DroneIds.push(this.CartOrderVM.order[i].Id);
        }
      
        var dataToSend = {

            "FirstName": self.OrderUserVM.FirstName,
            "LastName": self.OrderUserVM.LastName,
            "Phone_No": self.OrderUserVM.Phone_No,
            "Address": self.OrderUserVM.Address,
            "City": self.OrderUserVM.City,
            "Country": self.OrderUserVM.Country,
            "UserId": self.OrderUserVM.IdUser,
            "DroneIds": DroneIds,
            "RentalPeriod1": null,
            "RentalPeriod2": null,
            "OrderDate": new Date(),
           
            //"Tariff": 
            //$('#datetimepicker6').find('input').val()

        };

        //"RentalPeriod1": $('#datetimepicker6').data('datepicker').getDate(),
        //    "RentalPeriod2": $('#datetimepicker7').data('datepicker').getDate(),
        
        if (self.ShippingType === "NewAddress") {
            dataToSend.FirstName = self.OrderVM.FirstName;
            dataToSend.LastName = self.OrderVM.LastName;
            dataToSend.Phone_No = self.OrderVM.Phone_No;
            dataToSend.Address = self.OrderVM.Address;
            dataToSend.City = self.OrderVM.City;
            dataToSend.Country = self.OrderVM.Country;
         
        }
        if (self.Payment === "Rent")
        {
            dataToSend.RentalPeriod1 = $('#datetimepicker6').data('datepicker').getDate();
            dataToSend.RentalPeriod2 = $('#datetimepicker7').data('datepicker').getDate();
        }


        this.HttpService.post('api/Order/OrderDto', dataToSend).then(function (response) {
            self.OrderVM.ErrorMessage = "";
            console.log(response.data);

        }).catch(function (response) {
            console.log(response.data);
           
            self.OrderVM.ErrorMessage = response.data.Message;
        });

    }    

}
class CartOrderModel {
    public order: Array<any>;
    constructor() {
        this.order = new Array<any>();
    }
}
class OrderModel {
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
    public DateFrom: string;
    public DateTo: string;
    public RentalPeriod1: string;
    public RentalPeriod2: string;
    public Tariff: number;
}

class OrderUserModel {

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
    public RentalPeriod1: string;
    public RentalPeriod2: string;

}