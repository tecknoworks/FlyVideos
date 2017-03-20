function store() {
    localStorage.setItem('email');
    localStorage.setItem('password');
}
// check if stored data from register-form is equal to entered data in the   login-form
function check() {
    // stored data from the register-form
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    // entered data from the login-form
    var userEmail = document.getElementById('userEmail');
    var userPassword = document.getElementById('userPassword');
    // check if stored data from register-form is equal to data from login form
    if (userEmail.value !== storedEmail || userPassword.value !== storedPassword) {
        alert('ERROR');
    }
    else {
        alert('You are loged in.');
    }
}
