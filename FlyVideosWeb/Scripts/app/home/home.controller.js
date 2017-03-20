var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HomeController = (function (_super) {
    __extends(HomeController, _super);
    function HomeController(iDataService, $window, $scope) {
        _super.call(this, $window, $scope);
        this.HomeVM = new HomeModel();
        this._iDataService = iDataService;
        // debugger
        this._iDataService.Get("api/Drone/GetAll", this, this.GetDronesCallback);
    }
    HomeController.prototype.GetDronesCallback = function (drones, self) {
        self.HomeVM.drones = drones;
        self.initialize();
        //for (var i = 0; i < drones.length; i++) {
        //    console.log(drones[i]);
        //}
    };
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
    HomeController.prototype.initialize = function () {
        var self = this;
        setTimeout(function () {
            self.loadScript('front.js');
        }, 1000);
    };
    HomeController.prototype.loadScript = function (path) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    };
    return HomeController;
}(BaseController));
var HomeModel = (function () {
    function HomeModel() {
        this.drones = new Array();
    }
    return HomeModel;
}());
//# sourceMappingURL=home.controller.js.map