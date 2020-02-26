class ConfigurationPage {
    constructor() {
        this.Settings=element(by.xpath("//li[@class='settings-submenu']/div/a)"));
        this.Configuration=element(by.linkText("Configuration"));
        this.Candidate_Config=element(by.xpath("//div[@id='panel-group']//span[contains(.,'Candidate')]"));
        this.CandidateReferralEmail_ONOFF=element(by.xpath("//label[@for='on-off-cb16']"));
        this.CandidateBirthdayNotify_ONOFF=element(by.xpath("//label[@for='on-off-cb2']"));
        this.CandidateQueryMail_ONOFF=element(by.xpath("//label[@for='on-off-cb18']"));
        this.CandidateExternalUser_ONOFF=element(by.xpath("//label[@for='on-off-cb12']"));
        this.CandidateNotifyCandidate_ONOFF=element(by.xpath("//label[@for='on-off-cb14']"));
        this.CandidateNotifyDOJ_ONOFF=element(by.xpath("//label[@for='on-off-cb15']"));
        this.CandidateOnBoarding_ONOFF=element(by.xpath("//label[@for='on-off-cb10']"));
        this.CandidateReminder_ONOFF=element(by.xpath("//label[@for='on-off-cb1']"))
        this.Employee_Config=element(by.xpath("//span[contains(.,'Employee')]"));
        this.Employee30DaySurvey_ONOFF=element(by.xpath("//label[@for='on-off-cb3']"));
        this.Employee90DaySurvey_ONOFF=element(by.xpath("//label[@for='on-off-cb4']"));
        this.EmployeeJoiningDaySurver_ONOFF=element(by.xpath("//label[@for='on-off-cb11']"));
        this.InternalUser_Config=element(by.xpath("//span[contains(.,'INTERNAL_USER')]"));
        this.InternalUserCreation_ONOFF=element(by.xpath("//label[@for='on-off-cb17']"));
        this.InternalUserNotifyRag_ONOFF=element(by.xpath("//label[@for='on-off-cb19']"));
        this.InternalUserMailToHR_ONOFF=element(by.xpath("//label[@for='on-off-cb13']"));
        this.System_Config=element(by.xpath("//span[contains(.,'System')]"));
        this.System_ONOFF=element(by.xpath("//label[@for='on-off-cb5']"));
        this.TestEnvironment_Config=element(by.xpath("//span[contains(.,'Test Environment')]"));
        this.TestEnv_ONOFF=element(by.xpath("//label[@for='on-off-cb8']"));
    }

    MouseHoverSettings(){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        return browser.actions().mouseMove(this.Settings).perform();
    }

    clickOnConfiguration(){
        browser.sleep(5000);
        browser.ignoreSyncronization = true;
        return this.Configuration.click();
    }
    
    clickOnCandidate_Config(){
        this.Candidate_Config.click();
    }

    clickOnCandidateRefEmailONOFF(){
        this.CandidateReferralEmail_ONOFF.click();
    }

    clickOnCandidateBirthdayNotifyONOFF(){

        this.CandidateBirthdayNotify_ONOFF.click();
    }

    clickOnCandidateQueryMailONOFF(){
        this.CandidateQueryMail_ONOFF.click();
    }

    clickOnCandidateExternalUserONOFF(){
        this.CandidateExternalUser_ONOFF.click();
    }

    clickOnCandidateNotifyCandidateONOFF(){
        this.CandidateNotifyCandidate_ONOFF.click();
    }

    clickOnCandidateNotifyDojONOFF(){
        this.CandidateNotifyDOJ_ONOFF.click();
    }

    clickOnCandidateOnBoardingONOFF(){
        this.CandidateOnBoarding_ONOFF.click();
    }

    clickOnCandidateRemainderONOFF(){
        this.CandidateReminder_ONOFF.click();
    }
    
    clickOnEmployeeConfig(){
        this.Employee_Config.click();
    }

    clickOnEmployee30DaySurveyONOFF(){
        this.Employee30DaySurvey_ONOFF.click();
    }

    clickOnEmployee90DaySurveyONOFF(){
        this.Employee90DaySurvey_ONOFF.click();
    }

    clickOnEmployeeJoiningSurveyONOFF(){
        this.EmployeeJoiningDaySurver_ONOFF.click();
    }


    clickOnInternalUserConfig(){
        this.InternalUser_Config.click();
    }

    clickOnInternalUserCreationONOFF(){
        this.InternalUserCreation_ONOFF.click();
    }

    clickOnInternalUserNotifyRagONOFF(){
        this.InternalUserNotifyRag_ONOFF.click();
    }

    clickOnInternalUserMailHRONOFF(){
        this.InternalUserMailToHR_ONOFF.click();
    }

    clickOnSystemConfig(){
        this.InternalUser_Config.click();
    }
    clickOnSystemONOFF(){
        this.System_ONOFF.click();
    }

    clickOnTestEnvironmentConfig(){
        this.TestEnvironment_Config.click();
    }

    clickOnTestEnvONOFF(){
        this.TestEnv_ONOFF.click();
    }   
}
module.exports = ConfigurationPage;
