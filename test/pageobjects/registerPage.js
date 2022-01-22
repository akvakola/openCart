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
  get firstNameCharacterLengthValidationMessage() {
    return $("div=First Name must be between 1 and 32 characters!");
  }
  get lastNameCharacterLengthValidationMessage() {
    return $("div=Last Name must be between 1 and 32 characters!");
  }
  get invalidEmailValidationMessage() {
    return $("div=E-Mail Address does not appear to be valid!");
  }
  get telephoneCharacterLengthValidationMessage() {
    return $("div=Telephone must be between 3 and 32 characters!");
  }
  get passwordCharacterLengthValidationMessage() {
    return $("div=Password must be between 4 and 20 characters!");
  }
  get invalidPasswordConfirmationMessage() {
    return $("div=Password confirmation does not match password!");
  }
}

export default new RegisterPage();
