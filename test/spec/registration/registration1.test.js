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

});
