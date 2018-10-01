
describe('Testar a funcionalidade das operações matemáticas', function () {
    var primeiroCampo = element(by.model('first'));
    var segundoCampo = element(by.model('second'));
    var operacao = element(by.model('operator'));
    var botao = element(by.id('gobutton'));
    var resultado = element(by.css('h2[class="ng-binding"]'));


    beforeEach(function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('realizar conta de adição', function () {
        primeiroCampo.sendKeys(4);
        segundoCampo.sendKeys(5);
        botao.click();

        expect(resultado.getText()).toEqual('9');
    });

    it('realizar multiplicação', function () {
        var multiplicacao = element(by.css('option[value="MULTIPLICATION"]'));

        primeiroCampo.sendKeys(2);
        segundoCampo.sendKeys(3);
        operacao.click();
        multiplicacao.click();
        botao.click();

        expect(resultado.getText()).toEqual('6');
    });

    it('realizar subtração', function(){
        var divisao = element(by.css('option[value="SUBTRACTION"]'));

        primeiroCampo.sendKeys(10);
        segundoCampo.sendKeys(5);
        operacao.click();
        divisao.click();
        botao.click();

        expect(resultado.getText()).toEqual('5');
    });

    it('realizar divisão', function(){
        var divisao = element(by.css('option[value="DIVISION"]'));

        primeiroCampo.sendKeys(10);
        segundoCampo.sendKeys(5);
        operacao.click();
        divisao.click();
        botao.click();

        expect(resultado.getText()).toEqual('2');
    });

    it('realizar modulo', function(){
        var divisao = element(by.css('option[value="MODULO"]'));

        primeiroCampo.sendKeys(10);
        segundoCampo.sendKeys(5);
        operacao.click();
        divisao.click();
        botao.click();

        expect(resultado.getText()).toEqual('0');
    });
});