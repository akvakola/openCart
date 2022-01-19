import { forgotPasswordPage, header, loginPage } from "../../pageobjects";
import { verifyIsVisible, } from "../../pageobjects/common";

describe('Reset password tests', () => {

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
    // Mandatory test
    it('Enter email for password reset, verify success message', () => {
        forgotPasswordPage.emailInput.addValue(mail);
        forgotPasswordPage.continueButton.click();
        verifyIsVisible(forgotPasswordPage.confirmationEmailsentMessage)
    });
    // Mandatory test
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