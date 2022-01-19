class LoginPage {

    get emailInput() { return $("#input-email"); }
    get passwordInput() { return $("#input-password"); }
    get forgottenPasswordLink() { return $("a=Forgotten Password"); }
    get loginButton() { return $("[action] .btn-primary"); }
    get errorValidationMessage() { return $("div*= Warning: No match for E-Mail Address and/or Password."); }

    login(email, password) {
        this.emailInput.addValue(email);
        this.passwordInput.addValue(password);
        this.loginButton.click();
    }

}

export default new LoginPage;