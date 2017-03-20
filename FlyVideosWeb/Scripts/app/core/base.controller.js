var BaseController = (function () {
    function BaseController() {
        this.curentUser = null;
        if (localStorage.getItem('flyvideosUser') != null) {
            this.curentUser = JSON.parse(localStorage.getItem('flyvideosUser'));
        }
    }
    return BaseController;
}());
