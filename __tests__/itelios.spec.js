import { expect } from 'chai';

describe('Itelios', ()=> {

  describe('smoke test', ()=> {
    let efetivado = false;

    it('should exist the method "efetivado"', () => {
      expect(efetivado).to.be.equal(true);
    });

  });
});