class BaseController {
    protected currentUser: UserModel = null;
   
    //protected currentCart: CartModel = null;
    protected IWindowService: ng.IWindowService;
    protected scope: any ;
    constructor($window: ng.IWindowService, $scope: IScope)
    {
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
    public addToCart(drone: DroneModel) {
        debugger
        var self = this;
        var exist: boolean = false;
        var items = $.grep(self.scope.$root.shoppingCart, function (e: any, i) { return e.Id == drone.Id; });
        if (items.length === 0) {
            var orderItem: OrderItem = new OrderItem();
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

    }
    public LogOutClick()
    {
        localStorage.removeItem('flyvideosUser');
        localStorage.removeItem('flyvideosCart');
        this.IWindowService.location.href = '/index.html#!/home';
    }
    public SaveCart() {
        var cartJson = JSON.stringify(this.scope.$root.shoppingCart);
        localStorage.setItem('flyvideosCart', cartJson);
        
    }
  
   
}

class DroneModel {
    public Id: number;
    public Name: string;
    public Description: string;
    public Price: number;
    public OneImage: string;
    public BigImage: string;
    public TwoImage: string;
    public Qty: number;
    public Advertise: boolean;
}

