import { header, loginPage, search } from "../../../pageobjects";
import { verifyIsVisible } from "../../../pageobjects/common";

describe('Search tests', () => {

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
});