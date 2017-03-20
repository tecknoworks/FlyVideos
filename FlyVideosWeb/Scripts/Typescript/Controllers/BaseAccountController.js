//class BaseAccountController {
//    public VM: BaseAccountModel;
//    public validateEmail(email): any { };
//    public validatePassword(password): any { };
//    constructor() { }
//    public BaseBind() {
//        var controller = this;
//        controller.VM.ShowError = false;
//        controller.validatePassword = function (password) {
//            var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
//            return re.test(password);
//        }
//        controller.validateEmail = function (email) {
//            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//            return re.test(email);
//        }
//        return controller;
//    }
//}
//class BaseAccountModel {
//    public ErrorMessage: string;
//    public ShowError: boolean;
//    constructor() { }
//} 
//# sourceMappingURL=BaseAccountController.js.map