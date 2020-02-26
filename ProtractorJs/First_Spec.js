import { browser } from "protractor";

describe ('angularjs homepage', function() {
  browser.ignoreSynchronization = true;  // Non angular
  browser.waitForAngularEnabled(false); // or Non angular
    it('should have a title', function() {
      browser.get('http://angularjs.org/');
      expect(browser.getTitle()).toContain('AngularJS');
    });
  });


  