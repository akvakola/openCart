import { header, loginPage, logoutPage, search } from "../../pageobjects";
import { verifyIsVisible } from "../../pageobjects/common";

describe('Search tests', () => {
    // Logged in user
    it('Login and search for an iphone, verify results are displayed', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        header.openLoginPage()
        loginPage.login("vikshop@mail.com", "test.123");
        search.searchStore("iphone");
        const iPhoneResult = $("a=iPhone");
        verifyIsVisible(iPhoneResult);
    });

    it('Search for a MacBook, verify results are displayed', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const macBook = $("a=MacBook");
        const macBookAir = $("a=MacBook Air");
        const macBookPro = $("a=MacBook Pro");
        search.searchStore("MacBook");
        verifyIsVisible(macBook);
        verifyIsVisible(macBookAir);
        verifyIsVisible(macBookPro);
    });

    it('Search for a Apple Cinema, verify results are displayed', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const appleCinema = $("a*=Apple Cinema 30");
        search.searchStore("apple");
        verifyIsVisible(appleCinema);
    });

    it('Search for a Canon, verify results are displayed', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const canon = $("a=Canon EOS 5D");
        search.searchStore("canon");
        verifyIsVisible(canon);
    });

    it('Search for a MacBook Air, verify results are displayed', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const macBookAir = $("a=MacBook Air");
        search.searchStore("air");
        verifyIsVisible(macBookAir);
    });

    it('Search for a MacBook Pro, verify results are displayed', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const macBookPro = $("a=MacBook Pro");
        search.searchStore("pro");
        verifyIsVisible(macBookPro);
    });

    it('Logout, verify user is logged out', () => {
        header.logout();
        verifyIsVisible(logoutPage.accountLogoutTitle);
        logoutPage.continueButton.click();
    });

    // Visitor searching for products
    it('Search for a MacBook, verify results are displayed', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const macBook = $("a=MacBook");
        const macBookAir = $("a=MacBook Air");
        const macBookPro = $("a=MacBook Pro");
        search.searchStore("MacBook");
        verifyIsVisible(macBook);
        verifyIsVisible(macBookAir);
        verifyIsVisible(macBookPro);
    });

    it('Search for a Apple Cinema, verify results are displayed', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const appleCinema = $("a*=Apple Cinema 30");
        search.searchStore("apple");
        verifyIsVisible(appleCinema);
    });

    it('Search for a Canon, verify results are displayed', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const canon = $("a=Canon EOS 5D");
        search.searchStore("canon");
        verifyIsVisible(canon);
    });

    it('Search for a MacBook Air, verify results are displayed', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const macBookAir = $("a=MacBook Air");
        search.searchStore("air");
        verifyIsVisible(macBookAir);
    });

    it('Search for a MacBook Pro, verify results are displayed', () => {
        browser.url("https://demo.opencart.com/index.php?route=common/home");
        const macBookPro = $("a=MacBook Pro");
        search.searchStore("pro");
        verifyIsVisible(macBookPro);
    });
});