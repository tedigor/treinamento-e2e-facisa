


describe('teste com página not angular', function(){
    var noticia = element(by.css('a[title="Datafolha: Bolsonaro, 28%; Haddad, 22%; Ciro, 11%; Alckmin, 10%, Marina, 5%"]'))
    beforeEach(()=> {
        browser.get('https://www.globo.com/');
    })

    it('acessar noticia', ()=>{
        noticia.click();

        expect(browser.getCurrentUrl())
        .toBe('https://g1.globo.com/politica/eleicoes/2018/noticia/2018/09/28/pesquisa-datafolha-para-presidente-bolsonaro-28-haddad-22-ciro-11-alckmin-10-marina-5.ghtml');
    
        // expect(browser.getCurrentUrl()).toBe('cuscuz');
    })

});