var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StoreController = (function (_super) {
    __extends(StoreController, _super);
    function StoreController(iDataService, $window, $scope) {
        _super.call(this, $window, $scope);
        this.OrderDirection = "Ascending";
        this.OrderName = "Name";
        this.StoreVM = new StoreModel();
        this._iDataService = iDataService;
        //this.scope = $scope;
        //  this.quantity = 0;
        this._iDataService.Get("api/Drone/GetAll", this, this.GetStoreDronesCallback);
        // pagination
    }
    StoreController.prototype.GetStoreDronesCallback = function (storedrones, self) {
        console.log(storedrones); // TODO remove
        self.StoreVM.storedrones = storedrones;
        self.WorkingDataSorce = storedrones;
        self.initialize();
        self.PaginationInit();
    };
    StoreController.prototype.PaginationInit = function () {
        this.CurrentPage = 1;
        this.ItemsPage = 12;
        this.LastPage = this.GetLastPage(this.WorkingDataSorce, this.ItemsPage);
        this.Page = this.GetPage(this.CurrentPage, this.ItemsPage, this.WorkingDataSorce);
    };
    StoreController.prototype.SwapDrones = function (drone1, drone2) {
        var tempDrone = {};
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
    };
    StoreController.prototype.GetPage = function (currentPage, itemsPage, workingDataSorce) {
        var firstIndex = currentPage * itemsPage - itemsPage;
        var result = new Array();
        var lastIndex = firstIndex + itemsPage;
        if (lastIndex > workingDataSorce.length) {
            lastIndex = workingDataSorce.length;
        }
        for (var i = firstIndex; i < lastIndex; i++) {
            result.push(workingDataSorce[i]);
        }
        return result;
    };
    StoreController.prototype.GetLastPage = function (items, itemsPage) {
        return Math.ceil(items.length / itemsPage);
    };
    StoreController.prototype.SetItemsPerPage = function (itemsNumber) {
        this.ItemsPage = itemsNumber;
        this.CurrentPage = 1;
        this.LastPage = this.GetLastPage(this.WorkingDataSorce, this.ItemsPage);
        this.Page = this.GetPage(this.CurrentPage, this.ItemsPage, this.WorkingDataSorce);
    };
    StoreController.prototype.initialize = function () {
        var self = this;
        self.loadScript('front.js');
    };
    StoreController.prototype.loadScript = function (path) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/Content/Theme/js/' + path;
        head.appendChild(script);
    };
    StoreController.prototype.MoveToNextPage = function () {
        this.CurrentPage++;
        this.Page = this.GetPage(this.CurrentPage, this.ItemsPage, this.WorkingDataSorce);
    };
    StoreController.prototype.MoveToPreviousPage = function () {
        this.CurrentPage--;
        this.Page = this.GetPage(this.CurrentPage, this.ItemsPage, this.WorkingDataSorce);
    };
    StoreController.prototype.MoveToLastPage = function () {
        this.CurrentPage = this.LastPage;
        this.Page = this.GetPage(this.CurrentPage, this.ItemsPage, this.WorkingDataSorce);
        ;
    };
    StoreController.prototype.MoveToFirstPage = function () {
        this.CurrentPage = 1;
        this.Page = this.GetPage(this.CurrentPage, this.ItemsPage, this.WorkingDataSorce);
        ;
    };
    StoreController.prototype.OrderStore = function () {
        if (this.WorkingDataSorce == null || this.WorkingDataSorce.length == 0) {
            return;
        }
        var result = new Array();
        var temp;
        var ok = true;
        while (ok) {
            ok = false;
            for (var i = 0; i < this.WorkingDataSorce.length - 1; i++) {
                var needsSwap = false;
                debugger;
                if (this.OrderDirection == "Ascending") {
                    if (this.OrderName == "Name") {
                        needsSwap = this.WorkingDataSorce[i].Name > this.WorkingDataSorce[i + 1].Name;
                    }
                    else {
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
    };
    return StoreController;
}(BaseController));
var StoreModel = (function () {
    function StoreModel() {
        this.storedrones = new Array();
    }
    return StoreModel;
}());
var OrderItem = (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
//# sourceMappingURL=store.controller.js.map