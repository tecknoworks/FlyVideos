//angular.
//    module('register').
//    component('register', {
//        templateUrl: 'register/register.template.html',
//        controller: ['$http', Register2Controller]
//    });

//class Register2Controller {
//    public RegisterClick() { };
//    public validateEmail(email): any { };
//    public validatePassword(password): any { };
//    public VM: Register2Model;

//    constructor() {
//        var self = this;
//        this.VM = new Register2Model();
//        this.VM.ShowError = false;

//        this.RegisterClick = function () {
//            if (self.VM.Password !== self.VM.ConfirmPassword) {
//                self.VM.ErrorMessage = "The password must be the same!";
//                self.VM.ShowError = true;
//                return;
//            }
//            this.VM.ShowError = false;
//            this.validatePassword = function (password) {
//                var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
//                return re.test(password);
//            }
//            this.validateEmail = function (email) {
//                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//                return re.test(email);
//            }

//            if (this.validateEmail(self.VM.Email) !== true) {
//                self.VM.ErrorMessage = "Email address is not valid!";
//                self.VM.ShowError = true;
//                return;
//            }
//            if (self.validatePassword(self.VM.Password) !== true) {
//                self.VM.ErrorMessage = "Password is not valid!";
//                self.VM.ShowError = true;
//                return;
//            }
//            var sendObject = { Email: self.VM.Email, Password: self.VM.Password, ConfirmPassword: self.VM.Password };
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
//                    self.VM.ErrorMessage = response.Message;
//                    self.VM.ShowError = true;
//                },
//                dataType: "json"
//            });
//        }
//    }
//}

//class Register2Model extends BaseAccountModel {
//    public Email: string;
//    public Password: string;
//    public ConfirmPassword: string;
//    constructor() { super(); }
//}
