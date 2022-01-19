class AccountPage {

    get accountPageUrl() { return browser.url("https://demo.opencart.com/index.php?route=account/account"); }
    get myAccountTitle() { return $("h2=My Account"); }
    get myAccountTitle() { return $("h2=My Account"); }
    get myOrdersTitle() { return $("h2=My Orders"); }
    get myAffiliateAccountTitle() { return $("h2=My Affiliate Account"); }
    get newsletterTitle() { return $("h2=Newsletter"); }

}

export default new AccountPage;