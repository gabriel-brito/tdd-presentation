// Métodos de teste -- São ótimos para otimizar o tempo de desenvolvimento de acordo com o seu problema
// --bail para parar no primeiro erro encontrado
// it.skip() para pular esse teste em especifico
// it.only() para testar um único caso de teste

//Hooks de teste -- São ótimos para limpar, criar ou atribuir valores as variáveis
// before - Roda uma única vez antes de todos os casos de teste
// after - Roda uma única vez depois de todos os casos de teste
// beforeEach - Roda toda vez antes de rodar um caso de teste
// afterEach - Roda toda vez que terminar um caso de teste


import { expect } from 'chai';

describe('Array', ()=> {

  let arr;

  beforeEach(()=> {
    arr = [1,2,3];
  });

  afterEach(()=> {
    arr = 0;
  });

  describe('Array Smoke Test', ()=>{
    it('should be true if array exists', ()=> {
      expect(arr).to.exist;
    });
  });

  describe('Array unit tests', ()=> {
    it('should be an array', ()=> {
      expect(arr).to.be.an('array');
    });

    it('should have the size of 3', ()=>{
      expect(arr).to.have.lengthOf(3);
    });

    it('should have the size of 2 when .pop()', ()=>{
      arr.pop();
      expect(arr).to.have.lengthOf(2);
    });

    it('should have the size of 4 when .push()', ()=>{
      arr.push(4);
      expect(arr).to.have.lengthOf(4);
    });
  });

});