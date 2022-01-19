import { accountPage, header, loginPage, logoutPage } from "../../pageobjects";
import { verifyIsVisible } from "../../pageobjects/common";

describe('Login tests', () => {
    // Mandatory test
    it('Verify registered user can log in', () => {
        const email = "registereduser@vi.ki";
        const password = "test.123";

        browser.url("https://demo.opencart.com/index.php?route=common/home");
        header.openLoginPage();
        loginPage.login(email, password);
        verifyIsVisible(accountPage.myAccountTitle);
    });

    it('Logout, verify user is logged out', () => {
        header.logout();
        verifyIsVisible(logoutPage.accountLogoutTitle);
        logoutPage.continueButton.click();
    });

    it('Enter an invalid email, verify validation message', () => {
        header.openLoginPage();
        loginPage.login("fghjkl", "paspaspas222");
        verifyIsVisible(loginPage.errorValidationMessage);
    });
});