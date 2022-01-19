class LogoutPage {

    get accountLogoutTitle() { return $("h1=Account Logout"); }
    get safeToLeaveMessage() { return $("p=You have been logged off your account. It is now safe to leave the computer."); }
    get shoppingCartMessage() { return $("p=Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account."); }
    get continueButton() { return $("a=Continue"); }

}

export default new LogoutPage;