/* beforeEach,afterEach, beforeAll and afterAll example */

describe('angularjs homepage', function() {
    beforeAll(()=>{
        console.log("Before All")
    });
    afterAll(()=>{
        console.log("After All")
    });
    beforeEach(()=>{
        console.log("Before Each")
    });
    afterEach(()=>{
        console.log("After Each")
    });
    it('should have a title', function() {
        console.log("Test Case1")
      });
    it('should have a title', function() {
        console.log("Test Case2")
      });
  });

/* describe block example and multiple independent describe block*/
  
describe('angularjs homepage', function() {
    it('should have a title', function() {
        console.log("Test Case1")
      });
    it('should have a title', function() {
        console.log("Test Case2")
      });
  });

  /* nested describe block example and Execute specific describe-block and Execute specific it-block*/  

  fdescribe('angularjs homepage', function() {
    fit('should have a title', function() {
        console.log("Nested Describe Test Case1")
      });
    it('should have a title', function() {
        console.log("Nested Describe Test Case2")
      });
    describe('angularjs homepage', function() {
        it('should have a title', function() {
            console.log("Inner Describe Test Case1")
          });
        it('should have a title', function() {
            console.log("Inner Describe Test Case2")
          });
    });
  });

  /* nested describe block example and disable specific describe-block and disable specific it-block*/  

  xdescribe('angularjs homepage', function() {
    xit('should have a title', function() {
        console.log("Nested Describe Test Case1")
      });
    it('should have a title', function() {
        console.log("Nested Describe Test Case2")
      });
    describe('angularjs homepage', function() {
        it('should have a title', function() {
            console.log("Inner Describe Test Case1")
          });
        it('should have a title', function() {
            console.log("Inner Describe Test Case2")
          });
    });
  });