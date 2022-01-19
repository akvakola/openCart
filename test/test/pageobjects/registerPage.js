class RegisterPage {
  get registrationPage() {
    return browser.url(
      "https://demo.opencart.com/index.php?route=account/register"
    );
  }
  get firstNameInput() {
    return $("#input-firstname");
  }
  get lastNameInput() {
    return $("#input-lastname");
  }
  get emailInput() {
    return $("#input-email");
  }
  get telephoneInput() {
    return $("#input-telephone");
  }
  get passwordInput() {
    return $("#input-password");
  }
  get confirmPasswordInput() {
    return $("#input-confirm");
  }
  get continueButton() {
    return $("input[value='Continue']");
  }
  get privacyPolicyCheckbox() {
    return $("[type='checkbox']");
  }
}

export default new RegisterPage();
