class WelcomeLoginPage {

    constructor() {
        this.loginUserEmail = element(by.id('loginUserEmail'));
        this.loginUserPassword = element(by.id('loginUserPassword'));
        this.loginButton = element(by.id("//button[text()='Login']"));
    }

    typeEmail(user) {
        return element(by.id('loginUserEmail')).sendKeys(user);
    }

    typePassword(pwd) {
        return element(by.id('loginUserPassword')).sendKeys(pwd);
    }

    clickLoginButton(){
        return element(by.id("//button[text()='Login']")).click();
    }

    submit(user,pwd){
        typeEmail(user);
        typePassword(pwd);
        clickLoginButton();
    }
}

module.exports = WelcomeLoginPage;