
describe('Testa o valor de operações matemáticas', function(){
    var primeiroCampo = element(by.model('first'));
    var segundoCampo = element(by.model('second'));
    var operacao = element(by.model('operator'));
    var botao = element(by.id('gobutton'));
    var resultado = element(by.css('h2[class="ng-binding"]'));

    
    beforeEach(function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('realizar conta de adição', function(){
        browser.driver.manage().window().maximize();
        // primeiroCampo.sendKeys(2);
        
        botao.click();
        
        expect(resultado.getText()).toEqual('5');
    });

    it('realizar multiplicação', function(){
        var multiplicacao = element(by.css('option[value="MULTIPLICATION"]'));
        
        primeiroCampo.sendKeys(2);
        segundoCampo.sendKeys(3);
        operacao.click();
        multiplicacao.click();
        botao.click();

        expect(resultado.getText()).toEqual('6');
    });
});