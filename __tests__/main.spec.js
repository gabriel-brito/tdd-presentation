// Métodos de teste -- São ótimos para otimizar o tempo de desenvolvimento de acordo com o seu problema
// --bail para parar no primeiro erro encontrado
// it.skip() para pular esse teste em especifico
// it.only() para testar um único caso de teste

//Hooks de teste -- São ótimos para limpar, criar ou atribuir valores as variáveis
// before - Roda uma única vez antes de todos os casos de teste
// after - Roda uma única vez depois de todos os casos de teste
// beforeEach - Roda toda vez antes de rodar um caso de teste
// afterEach - Roda toda vez que terminar um caso de teste


// Stub: O stub é um simulador de comportamento de código. Ele é como um coringa.

let artigo = `https://medium.com/trainingcenter/
testes-unit%C3%A1rios-mocks-stubs-spies-e-todas-essas-palavras-dif%C3%ADceis-f2765ac87cc8`;

import { expect } from 'chai';
import { sum, sub, mult, div } from '../source/js/main';

describe('Main', ()=> {

  describe('Main Smoke tests', ()=>{
    it('should exist the method sum',()=>{
      expect(sum).to.exist;
    });

    it('should exist the method sub',()=>{
      expect(sub).to.exist;
    });

    it('should exist the method mult',()=>{
      expect(mult).to.exist;
    });

    it('should exist the method div',()=>{
      expect(div).to.exist;
    });
  });

  describe('Main Sum method test', ()=> {
    it('should be equal 4 when sum(2,2)', ()=> {
      expect(sum(2,2)).to.be.equal(4);
    });

    it('should be equal 8 when sum(4,4)', ()=>{
      expect(sum(4,4)).to.be.equal(8);
    });
  });

  describe('Main Sub method test', ()=> {
    it('should be equal 0 when sub(2,2)', ()=> {
      expect(sub(2,2)).to.be.equal(0);
    });

    it('should be equal 2 when sub(4,2)', ()=>{
      expect(sub(4,2)).to.be.equal(2);
    });
  });

  describe('Main mult method test', ()=> {
    it('should be equal 4 when mult(2,2)', ()=> {
      expect(mult(2,2)).to.be.equal(4);
    });

    it('should be equal 16 when mult(4,4)', ()=>{
      expect(mult(4,4)).to.be.equal(16);
    });
  });

  describe('Main div method test', ()=> {
    it('should be equal 1 when div(2,2)', ()=> {
      expect(div(2,2)).to.be.equal(1);
    });

    it('should be equal 2 when div(10,5)', ()=>{
      expect(div(10,5)).to.be.equal(2);
    });
  });
});