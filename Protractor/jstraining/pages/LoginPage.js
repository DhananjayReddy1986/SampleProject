class LoginPage {
    constructor() {
        this.Username = element(by.id("loginUserEmail"));
        this.Password = element(by.id('loginUserPassword'));
        this.LoginButton = element(by.buttonText('Login'));
    }

    getUrl(url) {
      browser.waitForAngularEnabled(true);
      browser.manage().window().maximize();
      return  browser.get(url).then(function(msg){console.log(msg);});   
    }

    enterUsername(username) {
       return  this.Username.sendKeys(username);
    }

    enterPassword(password) {
        return this.Password.sendKeys(password);
    }

    clickOnSubmit() {
        return this.LoginButton.click().then(function(){console.log("in clcik on submit success")}).catch(function(){console.log("fail");});
    }
    gettitle() {
        return browser.getTitle();  
    }
}
module.exports = LoginPage;
