var BaseController = (function () {
    function BaseController($window, $scope) {
        this.currentUser = null;
        this.IWindowService = $window;
        this.scope = $scope;
        //this.IWindowService = $window;
        if (localStorage.getItem('flyvideosUser') != null) {
            this.currentUser = JSON.parse(localStorage.getItem('flyvideosUser'));
        }
        if (localStorage.getItem('flyvideosCart') != null) {
            this.scope.$root.shoppingCart = JSON.parse(localStorage.getItem('flyvideosCart'));
        }
    }
    BaseController.prototype.addToCart = function (drone) {
        debugger;
        var self = this;
        var exist = false;
        var items = $.grep(self.scope.$root.shoppingCart, function (e, i) { return e.Id == drone.Id; });
        if (items.length === 0) {
            var orderItem = new OrderItem();
            orderItem.Id = drone.Id;
            orderItem.BigImage = drone.BigImage;
            orderItem.Name = drone.Name;
            orderItem.Price = drone.Price;
            orderItem.Qty = 1;
            // console.log(OrderItem);
            this.scope.$root.shoppingCart.push(orderItem);
        }
        else if (items.length > 0) {
            items[0].Qty++;
        }
        console.log(this.scope.$root.shoppingCart);
        this.SaveCart();
    };
    BaseController.prototype.LogOutClick = function () {
        localStorage.removeItem('flyvideosUser');
        localStorage.removeItem('flyvideosCart');
        this.IWindowService.location.href = '/index.html#!/home';
    };
    BaseController.prototype.SaveCart = function () {
        var cartJson = JSON.stringify(this.scope.$root.shoppingCart);
        localStorage.setItem('flyvideosCart', cartJson);
    };
    return BaseController;
}());
var DroneModel = (function () {
    function DroneModel() {
    }
    return DroneModel;
}());
//# sourceMappingURL=base.controller.js.map