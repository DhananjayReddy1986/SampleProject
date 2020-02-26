class LoginPage {

    constructor() {
        this.userName = element(by.model("first"));
        this.passWord = element(by.model("second"));
        this.submit = element(by.id('gobutton'));

    }
    
    enterUserName(number1){
        this.userName.sendKeys(number1);
    }
    enterpassWord(number2){
        this.passWord.sendKeys(number2);
    }
    clickLoginButton(){
        return this.submit.click();
    }
}
module.exports = LoginPage;