
    exports.config = {
      directConnect: true,  // No need to run the server
      //seleniumAddress: 'http://localhost:4444/wd/hub',
      // Capabilities to be passed to the webdriver instance.
      capabilities: {
      'browserName': 'chrome',

      /* chromeOptions: {                            // If you want to run ur scripts without chrome browser(i.e, headless browser)
        args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        } */

        /* browserName: 'firefox',    // If you want to run ur scripts without chrome browser(i.e, headless browser)
        'moz:firefoxOptions': {
	       args: [ "--headless" ]
        } */
    },          
    
      // Framework to use. Jasmine is recommended.
      framework: 'jasmine2',
    
      // Spec patterns are relative to the current working directory when
      // protractor is called.
      // specs: ['./Specs/Befo?reAfterEachAll.js'],

      //specs :['./Specs/Login_Spec.js']
      specs :['./*.js']
    };
    