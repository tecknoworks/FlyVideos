//class Register3Controller extends BaseAccountController {
//    public RegisterClick() { };
//    public validateEmail(email): any { };
//    public validatePassword(password): any { };
//    constructor() {
//        super();
//    }
//    public Bind() {
//        var controller = this;
//        var vm = new Register3Model();
//        vm.ShowError = false;
//        controller.VM = vm;
//           controller.RegisterClick = function () {
//           if (vm.Password !== vm.ConfirmPassword) {
//                controller.VM.ErrorMessage = "The password must be the same!";
//                controller.VM.ShowError = true;
//                return;
//            }
//            controller.VM.ShowError = false;
//            controller.validatePassword = function (password) {
//                var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
//                return re.test(password);
//            }
//            controller.validateEmail = function (email) {
//                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//                return re.test(email);
//            }
//            if (controller.validateEmail(vm.Email) !== true) {
//                controller.VM.ErrorMessage = "Email address is not valid!";
//                controller.VM.ShowError = true;
//                return;
//            }
//            if (controller.validatePassword(vm.Password) !== true) {
//                controller.VM.ErrorMessage = "Password is not valid!";
//                controller.VM.ShowError = true;
//                return;
//            }
//            var sendObject = { Email: vm.Email, Password: vm.Password, ConfirmPassword: vm.Password };
//            var json = JSON.stringify(sendObject);
//            $.ajax({
//                type: "POST",
//                contentType: "application/json",
//                headers: {},
//                url: "/api/Account/Register",
//                data: json,
//                success: function (result) {
//                    //controller.VM.ShowError = false;
//                },
//                complete: function () {
//                },
//                error: function (err) {
//                    var response = JSON.parse(err.responseText);
//                    controller.VM.ErrorMessage = response.Message;
//                    controller.VM.ShowError = true;
//                },
//                dataType: "json"
//            });
//        }
//    }
//}
//class Register3Model extends BaseAccountModel {
//    public Email: string;
//    public Password: string;
//    public ConfirmPassword: string;
//    constructor() { super();}
//} 
//# sourceMappingURL=RegisterController.js.map