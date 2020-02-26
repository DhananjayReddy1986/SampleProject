describe("Suite", () =>{
    it("Test1", () =>{
        browser.ignoreSynchronization = true;  // Non AngularJS application we need to make it true
        browser.get("https://www.toolsqa.com/protractor/jasmine-test/");
       // browser.driver.get("https://www.toolsqa.com/protractor/jasmine-test/");
        var title = browser.getTitle();
         title.then((tlt) =>{
             console.log(" title is  :"+tlt)
         })
    })
});


/* describe ("Suite", () =>{
    it("Test1",async () =>{
        browser.ignoreSynchronization = true;  // Non AngularJS application we need to make it true
        browser.get("https://www.toolsqa.com/protractor/jasmine-test/");
        var title = await browser.getTitle();
        console.log(title)
    })
}) */
