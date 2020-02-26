@Configuration
Feature: Configuration Tab

Scenario: As a AdminUser Check Configuration Tab

Given I Login As AdminUser
When I MouseHover on SETTINGS Tab
And I Click on Configuration Section under SETTINGS Tab 
And I Click on CANDIDATE Confirmation Email ON_OFF
And I Click on CANDIDATE Candidate birthday wishes ON_OFF 
And I Click on CANDIDATE Candidate Query email ON_OFF
And I Click on CANDIDATE External User Creation Email ON_OFF
And I Click on CANDIDATE Notify Candidate Email ON_OFF
And I Click on CANDIDATE Notify Doj Change Email ON_OFF
And I Click on CANDIDATE Onboarding day notification ON_OFF
And I Click on CANDIDATE Reminder notifications for offers issued ON_OFF
And I Click on EMPLOYEE Section
And I Click on Employee 30 day Survey ON_OFF
And I Click on Employee 90 day survey ON_OFF
And I Click on Employee Joining day Survey ON_OFF
And I Click on INTERNAL USER
And I Click on InternalUser Creation mail ON_OFF
And I Click on InternalUser  notify RagTag ON_OFF
And I Click on InternalUser RagTag mail to HR ON_OFF
And I Click on SYSTEM
And I Click on System Google Analytics DataLoad ON_OFF
And I Click on TEST ENVIRONMENT
And I Click on TestEnvironment SendEmail ON_OFF
