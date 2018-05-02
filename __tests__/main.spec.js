// Métodos de teste -- São ótimos para otimizar o tempo de desenvolvimento de acordo com o seu problema
// --bail para parar no primeiro erro encontrado
// it.skip() para pular esse teste em especifico
// it.only() para testar um único caso de teste

//Hooks de teste -- São ótimos para limpar, criar ou atribuir valores as variáveis
// before - Roda uma única vez antes de todos os casos de teste
// after - Roda uma única vez depois de todos os casos de teste
// beforeEach - Roda toda vez antes de rodar um caso de teste
// afterEach - Roda toda vez que terminar um caso de teste


var expect = require('chai').expect;

describe('Main', ()=> {

  describe('Context A', ()=>{

    var arr = [1,2,3];
    beforeEach(()=> {

    })


    it('should be true if array exists', ()=> {
      expect(arr).to.exist;
    });

    it('should do something', ()=> {

    });

    it('should do something', ()=> {

    });



  });

});