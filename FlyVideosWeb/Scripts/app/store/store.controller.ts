interface IScope extends ng.IRootScopeService {
    shoppingCart: Array<any>;
}

class StoreController extends BaseController {
    public StoreVM: StoreModel;
    protected _iDataService: IDataService;
    public CurrentPage: number;
    public NextCurrentPage: number;
    public LastCurrentPage: number;
    public ItemsPage: number;
    public LastPage: number;
    public WorkingDataSorce: Array<DroneModel>;
    public Page: Array<DroneModel>;
    public OrderDirection: string = "Ascending";
    public OrderName: string = "Name";
    constructor(iDataService: IDataService, $window: ng.IWindowService, $scope: IScope) {
        super($window, $scope);
        this.StoreVM = new StoreModel();
        this._iDataService = iDataService;
        //this.scope = $scope;
      //  this.quantity = 0;
        this._iDataService.Get("api/Drone/GetAll", this, this.GetStoreDronesCallback);

        // pagination
        
    }

    protected GetStoreDronesCallback(storedrones: Array<any>, self: StoreController): void {
        console.log(storedrones); // TODO remove
        self.StoreVM.storedrones = storedrones;
        self.WorkingDataSorce = storedrones;
        self.initialize();
        self.PaginationInit();
    }
  public PaginationInit(): void {
      this.CurrentPage = 1;
      this.ItemsPage = 12;
      this.LastPage = this.GetLastPage(this.WorkingDataSorce, this.ItemsPage);
      this.Page = this.GetPage(this.CurrentPage, this.ItemsPage, this.WorkingDataSorce);
     
  }


  protected SwapDrones(drone1: any, drone2: any): void {
      var tempDrone: any = {};
      tempDrone.Id = drone1.Id;
      tempDrone.Name = drone1.Name;
      tempDrone.Description = drone1.Description;
      tempDrone.Price = drone1.Price;
      tempDrone.OneImage = drone1.OneImage;
      tempDrone.TwoImage = drone1.TwoImage;
      tempDrone.BigImage = drone1.BigImage;

      drone1.Id = drone2.Id;
      drone1.Name = drone2.Name;
      drone1.Description = drone2.Description;
      drone1.Price = drone2.Price;
      drone1.OneImage = drone2.OneImage;
      drone1.TwoImage = drone2.TwoImage;
      drone1.BigImage = drone2.BigImage;

      drone2.Name = tempDrone.Name;
      drone2.Description = tempDrone.Description;
      drone2.Price = tempDrone.Price;
      drone2.OneImage = tempDrone.OneImage;
      drone2.TwoImage = tempDrone.TwoImage;
      drone2.BigImage = tempDrone.BigImage;
  }
  public GetPage(currentPage: number, itemsPage: number, workingDataSorce: Array<any>): Array<any>{
      var firstIndex: number = currentPage * itemsPage - itemsPage;
      var result: Array<any> = new Array<any>();
      var lastIndex = firstIndex + itemsPage;
      if (lastIndex > workingDataSorce.length)
      {
          lastIndex = workingDataSorce.length;
      }

      for (var i = firstIndex; i < lastIndex; i++)
      {
          result.push(workingDataSorce[i]);

      }

      return result;


  }
  public GetLastPage(items: Array<any>, itemsPage: number) {
      return Math.ceil(items.length / itemsPage);
  }

  public SetItemsPerPage(itemsNumber: number) {
      this.ItemsPage = itemsNumber;
      this.CurrentPage = 1;
      this.LastPage = this.GetLastPage(this.WorkingDataSorce, this.ItemsPage)
      this.Page = this.GetPage(this.CurrentPage, this.ItemsPage, this.WorkingDataSorce);
  }

 




    public initialize(): void {
        var self = this;
        self.loadScript('front.js');
      
    }

    public loadScript(path: string) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    }

    public MoveToNextPage() {
        this.CurrentPage++;
        this.Page = this.GetPage(this.CurrentPage, this.ItemsPage, this.WorkingDataSorce);
    }
    public MoveToPreviousPage() {

        this.CurrentPage--;
        this.Page = this.GetPage(this.CurrentPage, this.ItemsPage, this.WorkingDataSorce);
    }
    public MoveToLastPage() {
        this.CurrentPage = this.LastPage;
        this.Page = this.GetPage(this.CurrentPage, this.ItemsPage, this.WorkingDataSorce);;
    }
    public MoveToFirstPage() {
        this.CurrentPage = 1;
        this.Page = this.GetPage(this.CurrentPage, this.ItemsPage, this.WorkingDataSorce);;
    }
   
   
    public OrderStore(): void {
        if (this.WorkingDataSorce == null || this.WorkingDataSorce.length == 0){
            return;
        }

        var result: Array<any> = new Array<any>();

        var temp: any;
        var ok = true;
        while (ok) {
            ok = false;
            for (var i = 0; i < this.WorkingDataSorce.length - 1; i++) {
                var needsSwap = false;
               debugger
                if (this.OrderDirection == "Ascending") {
                    if (this.OrderName == "Name") {
                        needsSwap = this.WorkingDataSorce[i].Name > this.WorkingDataSorce[i + 1].Name;
                    }
                    else
                    {
                        if (this.OrderName == "Price") {
                            needsSwap = this.WorkingDataSorce[i].Price > this.WorkingDataSorce[i + 1].Price;
                        }
                    }



                }
                
                else if (this.OrderDirection == "Descending") {
                    if (this.OrderName == "Name") {
                        needsSwap = this.WorkingDataSorce[i].Name < this.WorkingDataSorce[i + 1].Name;
                    }
                    else {
                        if (this.OrderName == "Price") {
                            needsSwap = this.WorkingDataSorce[i].Price < this.WorkingDataSorce[i + 1].Price;
                        }
                    }
                }
               
               

                if (needsSwap) {
                    this.SwapDrones(this.WorkingDataSorce[i], this.WorkingDataSorce[i + 1]);
                    ok = true;

                }
            }
        }
       
        this.MoveToFirstPage();
    }
   
   
   
}

class StoreModel {
    public storedrones: Array<DroneModel>;
    constructor() {
        this.storedrones = new Array<DroneModel>();
    }
}

class OrderItem {
    public Id: number;
    public BigImage: string;
    public Name: string;
    public Price: number;
    public Qty: number;
    

}
