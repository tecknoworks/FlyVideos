var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DetailController = (function (_super) {
    __extends(DetailController, _super);
    function DetailController($http, $routeParams, $window, $scope) {
        _super.call(this, $window, $scope);
        this.DetailVM = new DetailModel();
        this.HttpService = $http;
        this.RouteParamsService = $routeParams;
        this.initialize();
        var self = this;
        this.HttpService.get(" api/Drone/Get/" + this.RouteParamsService.Id, {}).then(function (response) {
            self.DetailVM.Id = self.RouteParamsService.Id;
            self.DetailVM.Name = response.data.Name;
            self.DetailVM.Description = response.data.Description;
            self.DetailVM.Price = response.data.Price;
            self.DetailVM.OneImage = response.data.OneImage;
            self.DetailVM.BigImage = response.data.BigImage;
            self.DetailVM.TwoImage = response.data.TwoImage;
        }).catch(function (err) {
            console.log(err);
        });
    }
    DetailController.prototype.initialize = function () {
        var self = this;
        setTimeout(function () {
            self.loadScript('front.js');
        }, 100);
    };
    DetailController.prototype.loadScript = function (path) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    };
    return DetailController;
}(BaseController));
var ProductModel = (function () {
    function ProductModel() {
        this.product = new Array();
    }
    return ProductModel;
}());
var DetailModel = (function (_super) {
    __extends(DetailModel, _super);
    function DetailModel() {
        _super.apply(this, arguments);
    }
    return DetailModel;
}(DroneModel));
var Item = (function () {
    function Item() {
    }
    return Item;
}());
//# sourceMappingURL=detail.controller.js.map