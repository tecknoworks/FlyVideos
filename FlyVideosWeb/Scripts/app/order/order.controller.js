var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OrderController = (function (_super) {
    __extends(OrderController, _super);
    function OrderController($http, $window, $scope) {
        _super.call(this, $window, $scope);
        this.ShippingType = "UserAddress";
        this.Payment = "Buy";
        this.HttpService = $http;
        this.OrderVM = new OrderModel;
        this.CartOrderVM = new CartOrderModel();
        this.OrderUserVM = new OrderUserModel();
        // this.DetailsVM.details=this.scope.$root.shoppingCart;
        this.CartOrderVM.order = this.scope.$root.shoppingCart;
        var self = this;
        var config = {
            headers: {
                "Authorization": 'Bearer ' + this.currentUser.token,
            }
        };
        this.HttpService.get(" api/UserDetails/?username=" + this.currentUser.email, config).then(function (response) {
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
    OrderController.prototype.PlaceOrder = function () {
        var self = this;
        var config = {
            headers: {
                "dataType": "json",
                "contentType": "application/json",
                "Authorization": 'Bearer ' + self.currentUser.token,
            }
        };
        var DroneIds = new Array();
        for (var i = 0; i < this.CartOrderVM.order.length; i++) {
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
        if (self.Payment === "Rent") {
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
    };
    return OrderController;
}(CartController));
var CartOrderModel = (function () {
    function CartOrderModel() {
        this.order = new Array();
    }
    return CartOrderModel;
}());
var OrderModel = (function () {
    function OrderModel() {
    }
    return OrderModel;
}());
var OrderUserModel = (function () {
    function OrderUserModel() {
    }
    return OrderUserModel;
}());
//# sourceMappingURL=order.controller.js.map