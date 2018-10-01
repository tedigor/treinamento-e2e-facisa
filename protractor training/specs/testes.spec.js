
describe('Protractor demonstração', function(){
    var titulo = element(by.css('h3'));

    it('Verificar título da página', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        
        expect(titulo.getText()).toEqual('Super Calculator');
    });
});
