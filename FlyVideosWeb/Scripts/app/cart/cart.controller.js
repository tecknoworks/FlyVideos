var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CartController = (function (_super) {
    __extends(CartController, _super);
    function CartController($window, $scope) {
        _super.call(this, $window, $scope);
        var self = this;
        this.CartVM = new CartModel();
        //  this.Quantity = new Quantity();
        //this.scope = $scope;
        this.CartVM.cart = this.scope.$root.shoppingCart;
    }
    CartController.prototype.baseValueChange = function (qty) {
        this.SaveCart();
    };
    CartController.prototype.UpdateTotal = function () {
        this.CartVM.total = 0;
        for (var i = 0; i < this.CartVM.cart.length; i++) {
            this.CartVM.total = this.CartVM.total + this.CartVM.cart[i].Price * this.CartVM.cart[i].Qty;
        }
        return this.CartVM.total;
    };
    //public UpdateQty() {
    //    for (var i = 0; i < this.CartVM.cart.length; i++) {
    //        this.scope.$watch(() => this.scope.CartVM.cart[i].Qty,
    //            (newValue: string, oldValue: string) => {
    //                if (oldValue !== newValue) {
    //                    alert("this.CartVM.cart[i].Qty changed to " +
    //                        this.scope.CartVM.cart[i].Qty);
    //            }
    //            });
    //    }
    //    this.SaveCart();
    //}
    CartController.prototype.Shipping = function () {
        var shipping = 0;
        if (this.UpdateTotal() > 5000) {
            shipping = 10;
        }
        else {
            shipping = 20;
        }
        return shipping;
    };
    CartController.prototype.Tax = function () {
        var tax = 0;
        if (this.UpdateTotal() > 5000) {
            tax = 5;
        }
        return tax;
    };
    CartController.prototype.RemoveItem = function (index, event) {
        event.preventDefault();
        this.CartVM.cart.splice(index, 1);
        this.UpdateTotal();
        this.SaveCart();
    };
    return CartController;
}(BaseController));
var CartModel = (function () {
    function CartModel() {
        this.cart = new Array();
        this.total = 0;
    }
    return CartModel;
}());
var cartModel = (function () {
    function cartModel() {
    }
    return cartModel;
}());
//# sourceMappingURL=cart.controller.js.map