// Métodos de teste -- São ótimos para otimizar o tempo de desenvolvimento de acordo com o seu problema
// --bail para parar no primeiro erro encontrado
// it.skip() para pular esse teste em especifico
// it.only() para testar um único caso de teste

//Hooks de teste -- São ótimos para limpar, criar ou atribuir valores as variáveis
// before - Roda uma única vez antes de todos os casos de teste
// after - Roda uma única vez depois de todos os casos de teste
// beforeEach - Roda toda vez antes de rodar um caso de teste
// afterEach - Roda toda vez que terminar um caso de teste

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { pokemon } from '../source/js/fetch';

chai.use(sinonChai);
sinonStubPromise(sinon);


global.fetch = require('node-fetch');

describe('Fetch Pokemon', () => {
  let fetchedStub;
  let promise;

  beforeEach(()=> {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(()=> {
    fetchedStub.restore();
  })


  describe('Smoke Test', ()=> {
    it('should exist the pokemon method', () => {
      expect(pokemon).to.exist;
    });
  });

  describe('Testing pokemon fetch', ()=>{
    it('should call fetch function', ()=> {
      const fetchedPokemon = pokemon();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should fetch function have been called with the correct URL', ()=> {
      context('It should have been called with bulbasaur', ()=>{
        let bulbasaur = pokemon('bulbasaur');
        expect(fetchedStub).to.have.been
          .calledWith('http://pokeapi.co/api/v2/pokemon/bulbasaur');
      });

      context('It should have been called with bulbasaur', ()=>{
        let squirtle = pokemon('squirtle');
        expect(fetchedStub).to.have.been
          .calledWith('http://pokeapi.co/api/v2/pokemon/squirtle');
      });
    });

    it('should return the JSON Data from the promise', ()=>{
      promise.resolves({body: 'json'});

      const fetchedPokemon = pokemon('bulbasaur');

      expect(fetchedPokemon.resolveValue).to.be.eql({body: 'json'})

    });

    it('should return an Object from return', ()=> {
      let bulbasaur = pokemon('bulbasaur');

      expect(bulbasaur).to.be.an('object');
    });

  });





});