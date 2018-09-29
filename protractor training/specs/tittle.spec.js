

describe('Protractor Demo App', function () {
    
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        
    });
    
    it('should have a title', function () {
       
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});