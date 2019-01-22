import { assert, expect } from 'chai';
import Trie from '../lib/Trie';
import Node from '../lib/Node';
import fs from 'fs';

describe('Trie', () => {
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should be a function', () => {
    assert.isFunction(Trie);
  });

  it('should set its default head to null', () => {
    expect(trie.head).to.eq(null);
  });

  it('should set its default count to 0 ', () => {
    expect(trie.total).to.eq(0);
  });

  describe('insert method', () => {
    let trie;

    beforeEach(() => {
      trie = new Trie();
    });

    it('should take in a word as an argument', () => {
      assert.equal(trie.insert('hey'));
    });

    it('should add to the count for each word', () => {
      let trie2 = new Trie();

      trie2.insert('hey');
      trie2.insert('hello');
      assert.equal(trie2.count(), 2);
    });
  });  

  describe('count method', () => {
    let trie;

    beforeEach(() => {
      trie = new Trie();
    });

    it('should return the count', () => {
      assert.equal(trie.count(), 0);
    });

    it('count should increment by 1 each time a word is passed', () => {
      trie.insert('hey');
      assert.equal(trie.count(), 1);
    });
  });

  describe('populate method', () => {  
    let trie;

    beforeEach(() => {
      trie = new Trie();
    });

    it('should be a function', () => { 
      assert.isFunction(trie.populate);
    });

    it('should take in a parameter of dictionary', () => {
      const text = "/usr/share/dict/words";
      const dictionary = fs.readFileSync(text).toString().trim().split('\n');
      const prefixTrie = new Trie();
      
      prefixTrie.populate(dictionary);
      
      expect(prefixTrie.total).to.eq(235886);
    });
  });

  describe('suggest method', () => {
    let trie;

    beforeEach(() => {
      trie = new Trie();
    });

    it('should be a function', () => {
      assert.isFunction(trie.suggest);
    });

  });
});