import { verifyIsVisible } from "../../pageobjects/page1/page1";

describe('awf', () => {
    it('awddd', () => {
        browser.url("https://demo.opencart.com/");
        const title = $("h1=Your Storawde");
        verifyIsVisible(title);
    });
});