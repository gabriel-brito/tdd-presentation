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

});