class CartController  extends BaseController{
    public CartVM: CartModel;
   // public Quantity: Quantity;
    protected scope: any;

    constructor( $window: ng.IWindowService, $scope: IScope) {
        super($window, $scope);
        var self = this;
        this.CartVM = new CartModel();
      //  this.Quantity = new Quantity();
        //this.scope = $scope;
        this.CartVM.cart = this.scope.$root.shoppingCart;
    }

    public baseValueChange(qty) {
        this.SaveCart();
    }
   
    public UpdateTotal() {
        this.CartVM.total = 0;
        for (var i = 0; i < this.CartVM.cart.length; i++) {
            this.CartVM.total = this.CartVM.total + this.CartVM.cart[i].Price * this.CartVM.cart[i].Qty;
        }
        
        return this.CartVM.total;
    }
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
    public Shipping() {
        var shipping = 0;
        if (this.UpdateTotal() > 5000) {
            shipping = 10;
        }
        else
        {
            shipping = 20;
        }
        return shipping;
    }
    public Tax() {
        var tax = 0;
        if (this.UpdateTotal() > 5000)
        {
            tax = 5;
        }
        return tax;
    }
    protected RemoveItem(index, event) {
        event.preventDefault();
        this.CartVM.cart.splice(index, 1);
        this.UpdateTotal();
        this.SaveCart();
    }
}
class CartModel {
    public cart: Array<any>;
    public total: number;
    public quantity: number;

    constructor() {
        this.cart = new Array<any>();
        this.total = 0;
    }
}
class cartModel {
    public Id: number;
    public BigImage: string;
    public Name: string;
    public Price: number;
    public Qty: number;
}
