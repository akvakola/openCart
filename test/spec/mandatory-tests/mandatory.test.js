import { registerPage, loginPage, header, logoutPage, search, accountPage, forgotPasswordPage } from "../../pageobjects";
import { randomShortStringNum, verifyIsVisible } from "../../pageobjects/common";

describe('All Mandatory test cases', () => {


    const randomFirstName = `shoppa${randomShortStringNum()}`;
    const randomLastName = `shoppa${randomShortStringNum()}`;
    const randomEmail = `${randomFirstName}@mailinator.com`;
    const password = "test.123";

    it("Visitor user can create an account", () => {
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

    it('Logged in user can log out', () => {
        header.logout();
        verifyIsVisible(logoutPage.safeToLeaveMessage);
        verifyIsVisible(logoutPage.shoppingCartMessage);
        verifyIsVisible(logoutPage.continueButton);
    });

    it('Registered user can log in', () => {
        header.openLoginPage();
        loginPage.emailInput.addValue(randomEmail);
        loginPage.passwordInput.addValue(password);
        loginPage.loginButton.click();
        verifyIsVisible(accountPage.myAccountTitle);
        verifyIsVisible(accountPage.myOrdersTitle);
        verifyIsVisible(accountPage.myAffiliateAccountTitle);
        verifyIsVisible(accountPage.newsletterTitle);
    });

    it('Logged in user can search for products - iphone', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        search.searchStore("iphone");
        const iPhoneResult = $("a=iPhone");
        verifyIsVisible(iPhoneResult);
    });

    it('Logged in user can search for products - MacBook Pro', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const macBookPro = $("a=MacBook Pro");
        search.searchStore("pro");
        verifyIsVisible(macBookPro);
    });

    it('Visitor user can search for products - MacBook ', () => {
        header.logout();
        verifyIsVisible(logoutPage.accountLogoutTitle);
        logoutPage.continueButton.click();
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const macBook = $("a=MacBook");
        const macBookAir = $("a=MacBook Air");
        const macBookPro = $("a=MacBook Pro");
        search.searchStore("MacBook");
        verifyIsVisible(macBook);
        verifyIsVisible(macBookAir);
        verifyIsVisible(macBookPro);
    });

    it('Visitor user can search for products - Apple Cinema 30 ', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const appleCinema = $("a*=Apple Cinema 30");
        search.searchStore("apple");
        verifyIsVisible(appleCinema);
    });

    const mail = "vikinovakis@mailinator.com";

    it('Verify reset password page main elements are visible', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        header.openLoginPage();
        loginPage.forgottenPasswordLink.click();
        forgotPasswordPage.emailInput
        verifyIsVisible(forgotPasswordPage.emailInput);
        verifyIsVisible(forgotPasswordPage.forgotPasswordTitle);
        verifyIsVisible(forgotPasswordPage.yourEmailAddressText);
        verifyIsVisible(forgotPasswordPage.continueButton);
        verifyIsVisible(forgotPasswordPage.backButton);
    });

    it('Enter email for password reset, verify success message', () => {
        forgotPasswordPage.emailInput.addValue(mail);
        forgotPasswordPage.continueButton.click();
        verifyIsVisible(forgotPasswordPage.confirmationEmailsentMessage)
    });

    // Messages are not being sent, so this test will fail every time
    it('Check mail service if mail was recieved', () => {
        const mailServiceSerchInput = $("#search");
        const searchButton = $("button=GO");
        const firstRecievedMail = $(".ng-scope:nth-of-type(1) > .ng-binding:nth-of-type(2)");
        browser.url("https://www.mailinator.com/");
        mailServiceSerchInput.addValue(mail);
        browser.pause(1000);
        searchButton.click();
        verifyIsVisible(firstRecievedMail);
    });
});

