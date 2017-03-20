interface IRouteParams extends ng.route.IRouteParamsService {
    Id: number;
}



class DetailController extends BaseController {
    public DetailVM: DetailModel;

    //private _iDataService: IDataService;
    public ProductVM: ProductModel;
    protected HttpService: ng.IHttpService;
    protected RouteParamsService: IRouteParams;
    constructor($http: ng.IHttpService, $routeParams: IRouteParams,  $window: ng.IWindowService, $scope: IScope) {
        super($window, $scope);
        this.DetailVM = new  DetailModel();
        this.HttpService = $http;
        this.RouteParamsService = $routeParams;
        this.initialize();
        var self = this;
        this.HttpService.get(" api/Drone/Get/" + this.RouteParamsService.Id,
            {}).then(function (response: any) {
                self.DetailVM.Id = self.RouteParamsService.Id;
                self.DetailVM.Name = response.data.Name;
                self.DetailVM.Description = response.data.Description;
                self.DetailVM.Price = response.data.Price;
                self.DetailVM.OneImage = response.data.OneImage
                self.DetailVM.BigImage = response.data.BigImage
                self.DetailVM.TwoImage = response.data.TwoImage
                
            }).catch(function (err) {
                console.log(err);
            });


    }
   
   
    public initialize(): void {
        var self = this;
        setTimeout(function () {
            self.loadScript('front.js');
        }, 100);
    }

    public loadScript(path: string) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    }
}

class ProductModel {
    public product: Array<any>;
    constructor() {
        this.product = new Array<any>();
    }
}


class DetailModel extends DroneModel
{
}

class Item {
    public Id: number;
    public Name: string;
    public Description: string;
    public Price: number;
    public Qty: number;
    public BigImage: string;
   

}