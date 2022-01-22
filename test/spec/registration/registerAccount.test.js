import { accountPage, header, loginPage, logoutPage, registerPage, search } from "../../pageobjects";
import { randomShortStringNum, verifyIsVisible, } from "../../pageobjects/common";

describe("Registration tests", () => {

    const randomFirstName = `shoppa${randomShortStringNum()}`;
    const randomLastName = `shoppa${randomShortStringNum()}`;
    const randomEmail = `${randomFirstName}@mailinator.com`;
    const password = "test.123";
    //Mandatory test
    it("Register an account, verify it is a success", () => {
        const createdAccountTitle = $("h1=Your Account Has Been Created!");
        registerPage.registrationPage;
        registerPage.firstNameInput.addValue(randomFirstName);
        registerPage.lastNameInput.addValue(randomLastName);
        registerPage.emailInput.addValue(randomEmail);
        registerPage.telephoneInput.addValue("+5550005556969");
        registerPage.passwordInput.addValue(password);
        registerPage.confirmPasswordInput.addValue(password);
        registerPage.privacyPolicyCheckbox.click();
        registerPage.continueButton.click();
        verifyIsVisible(createdAccountTitle);
    });
    //Mandatory test
    it('User should be able to log out, verify user is logged out message', () => {
        header.logout();
        verifyIsVisible(logoutPage.safeToLeaveMessage);
        verifyIsVisible(logoutPage.shoppingCartMessage);
        verifyIsVisible(logoutPage.continueButton);
    });
    //Mandatory test
    it('Login with a registered user, verify user is logged in', () => {
        header.openLoginPage();
        loginPage.emailInput.addValue(randomEmail);
        loginPage.passwordInput.addValue(password);
        loginPage.loginButton.click();
        verifyIsVisible(accountPage.myAccountTitle);
        verifyIsVisible(accountPage.myOrdersTitle);
        verifyIsVisible(accountPage.myAffiliateAccountTitle);
        verifyIsVisible(accountPage.newsletterTitle);
    });

    it('Logout, verify user is logged out', () => {
        header.logout();
        verifyIsVisible(logoutPage.accountLogoutTitle);
        logoutPage.continueButton.click();
    });

    it('Submit a blank request verify first name validation message is displayed', () => {
        registerPage.registrationPage;
        registerPage.continueButton.waitForClickable();
        registerPage.continueButton.click();
        verifyIsVisible(registerPage.firstNameCharacterLengthValidationMessage);
    });

    it('Submit a blank request verify last name validation message is displayed', () => {
        verifyIsVisible(registerPage.lastNameCharacterLengthValidationMessage);
    });

    it('Submit a blank request verify email validation message is displayed', () => {
        verifyIsVisible(registerPage.invalidEmailValidationMessage);
    });

    it('Submit a blank request verify telephone validation message is displayed', () => {
        verifyIsVisible(registerPage.telephoneCharacterLengthValidationMessage);
    });

    it('Submit a blank request verify password validation message is displayed', () => {
        verifyIsVisible(registerPage.passwordCharacterLengthValidationMessage);
    });

    it('Enter not matching passwords, verify confirm password validation message is displayed', () => {
        registerPage.registrationPage;
        registerPage.continueButton.waitForClickable();
        registerPage.passwordInput.addValue("test.123");
        registerPage.confirmPasswordInput.addValue("pass.123");
        registerPage.continueButton.click();
        verifyIsVisible(registerPage.invalidPasswordConfirmationMessage);
    });

});
