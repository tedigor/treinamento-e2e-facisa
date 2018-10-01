

describe('Realizar pesquisa no Google', function () {
    var input = element(by.css('input[title="Pesquisar"]'));
    var linkFacisa = element(by.css('a[href="https://www.unifacisa.edu.br/"]'));

    beforeAll(function () {
        browser.waitForAngularEnabled(false);
    });

    afterAll(function () {
        browser.waitForAngularEnabled(true);
    })

    beforeEach(function () {
        browser.get('https://www.google.com.br/')
    });

    it('Buscar e acessar o site da Unifacisa', function () {

        input.sendKeys('Unifacisa');
        input.sendKeys(protractor.Key.ENTER);
        linkFacisa.click();

        expect(browser.getCurrentUrl()).toContain('www.unifacisa.edu.br');
    });
});