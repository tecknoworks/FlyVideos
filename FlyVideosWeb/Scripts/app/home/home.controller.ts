class HomeController extends BaseController {
   public HomeVM: HomeModel;
   
    //protected HttpService: ng.IHttpService
    //constructor($http: ng.IHttpService, $window: ng.IWindowService) {
    //    super($window);
       
    //    this.initialize();
    //    this.HomeVM = new HomeModel();
    //    this.HttpService = $http;
    //}
    private _iDataService: IDataService;
    constructor(iDataService: IDataService, $window: ng.IWindowService, $scope: IScope) {
        super($window, $scope);
        this.HomeVM = new HomeModel();
        this._iDataService = iDataService;
       
       // debugger
        this._iDataService.Get("api/Drone/GetAll", this, this.GetDronesCallback);
    }

    private GetDronesCallback(drones: Array<any>, self: HomeController): void {
        self.HomeVM.drones = drones;
        self.initialize();
            
        //for (var i = 0; i < drones.length; i++) {
        //    console.log(drones[i]);
        //}
    }

    //public getHomeClick() {
    //    this._iDataService.Get("api/Drone");
    //    debugger
    //}

  // public getHomeModel(): void {
        //var self = this;
       ///* $.ajax({
       //     type: "GET",
       //     url: 'api/Drone',

       //     success: function (result) {
                
       //     }
       // });*/
       // self.HttpService.get('api/Drone')
       // .then(function (response) {
       //     //self.HomeVM=response.data;
       // });
      
       
    //}

    public initialize(): void {
        var self = this;


        setTimeout(function () {
             self.loadScript('front.js');
        }, 1000);
    }

    public loadScript(path: string)
    {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    }
}

class HomeModel {
    public drones: Array<any>;
    constructor() {
        this.drones = new Array<any>();
    }
}


