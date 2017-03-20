//class Log2InController extends BaseAccountController {
//    public LogInClick() { };
//    public validateEmail(email): any { };
//    public validatePassword(password): any { };
//    constructor() {
//        super();

//    }
//    public Bind() {
//        var controller = this;
//        var vm = new LogInModel();
//        vm.ShowError = false;
//        controller.VM = vm;

//        controller.validatePassword = function (password) {
//            var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
//            return re.test(password);
//        }
//        controller.validateEmail = function (email) {
//            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//            return re.test(email);
//        }

//        controller.LogInClick = function () {
//            if (controller.validateEmail((<LogIn2Model>controller.VM).Email) !== true) {
//                controller.VM.ErrorMessage = "Email address is not valid!";
//                controller.VM.ShowError = true;
//                return;
//            }
//            if (controller.validatePassword(vm.Password) !== true) {
//                controller.VM.ErrorMessage = "Password is not valid!";
//                controller.VM.ShowError = true;
//                return;
//            }

//            var dto: Log2InDto = new LogIn2Dto(vm.Email, vm.Password);
//            var json = JSON.stringify(dto);

//            $.ajax({
//                type: "POST",
//                //contentType: "application/json",
//                headers: {},
//                url: "/token",
//                data: dto,
//                success: function (result) {

//                },
//                complete: function (result) {

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


//class Log2InModel extends BaseAccountModel {
//    public Email: string;
//    public Password: string;
//    constructor() { super(); }
//}

//class LogIn2Dto {
//    public grant_type: string = 'password';
//    public username: string;
//    public password: string;
//    constructor(email: string, password: string) {
//        this.username = email;
//        this.password = password;
//    }
//}



