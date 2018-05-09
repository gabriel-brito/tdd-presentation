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

  beforeEach(()=> {
    fetchedStub = sinon.stub(global, 'fetch');
    
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


      // let squirtle = pokemon('squirtle');
      // expect(fetchedStub).to.have.been
      //   .calledWith('http://pokeapi.co/api/v2/pokemon/squirtle')
    });



  });





});