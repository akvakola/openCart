class Header {

    get userIcon() { return $(".fa-user"); }
    get myAccountLink() { return $(".dropdown-menu-right").$("a=My Account"); }
    get orderHistoryLink() { return $(".dropdown-menu-right").$("a=Order History"); }
    get transactionsLink() { return $(".dropdown-menu-right").$("a=Transactions"); }
    get logoutLink() { return $(".dropdown-menu-right").$("a=Logout"); }
    get registerLink() { return $(".dropdown-menu-right").$("a=Register"); }
    get loginLink() { return $(".dropdown-menu-right").$("a=Login"); }

    logout() {
        this.userIcon.click();
        this.logoutLink.waitForClickable();
        this.logoutLink.click();
    }
    openLoginPage() {
        this.userIcon.click();
        this.loginLink.waitForClickable();
        this.loginLink.click();
    }

}

export default new Header;