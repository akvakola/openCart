class ForgotPasswordPage {

    get emailInput() { return $("#input-email"); };
    get continueButton() { return $("input[value='Continue']"); };
    get backButton() { return $("a=Back"); }
    get forgotPasswordTitle() { return $("h1=Forgot Your Password?"); }
    get yourEmailAddressText() { return $("legend=Your E-Mail Address"); };
    get confirmationEmailsentMessage() { return $("div*= An email with a confirmation link has been sent your email address."); };


}

export default new ForgotPasswordPage;