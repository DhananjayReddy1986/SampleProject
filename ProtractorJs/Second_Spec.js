import { element } from "protractor";

describe('angularjs homepage', function() {
    it('should have a title', function() {
      console.log("Second Spec");
      browser.get('http://angularjs.org/');
      expect(browser.getTitle()).toContain('AngularJS');
      var model = element(by.model('')); 
      var id = element(by.id(''));
      var name = element(by.name(''));
      var opt = element(by.options(''));
      element(by.id(''));
      element(by.repeater(''));
      

    });
  });