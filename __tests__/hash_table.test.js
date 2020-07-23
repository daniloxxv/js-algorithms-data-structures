const expect = require('expect');
const HashTable = require('../data_structures/hash_table');

describe('Hash table', () => {
  it('Should set and get values', () => {
    const ht = new HashTable();
    ht.set('foo', 'bar');
    expect(ht.get('foo')).toEqual('bar');
  });
  it('Should handle collisions', () => {
    const ht = new HashTable();
    ht.set('mmjosdl', 'foo');
    expect(ht.get('mmjosdl')).toEqual('foo');
    expect(ht.get('b')).toBeUndefined();
    ht.set('b', 'bar');
    expect(ht.get('mmjosdl')).toEqual('foo');
    expect(ht.get('b')).toEqual('bar');
  });
  it('Should return undefined if there\'s no value for a given key', () => {
    const ht = new HashTable();
    expect(ht.get('something')).toBeUndefined();
  });
});
