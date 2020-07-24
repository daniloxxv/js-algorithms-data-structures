const expect = require('expect');
const HashTable = require('../data_structures/hash_table');

describe('Hash table', () => {
  it('Should set and get values', () => {
    const ht = new HashTable();
    ht.set('foo', 'bar');
    expect(ht.get('foo')).toEqual('bar');
  });
  it('Should update a value', () => {
    const ht = new HashTable();
    ht.set('foo', 'bar');
    ht.set('foo', 'baz');
    expect(ht.get('foo')).toEqual('baz');
  });
  it('Should delete a value', () => {
    const ht = new HashTable();
    ht.set('foo', 'bar');
    ht.delete('foo');
    expect(ht.get('foo')).toBeUndefined();
  });
  it('Should do nothing to the hash table on delete if the key doesn\'t exist', () => {
    const ht = new HashTable();
    ht.set('foo', 'bar');
    const temp = [...ht.keyMap];
    ht.delete('baz');
    expect(ht.keyMap).toEqual(temp);
  });
  it('Should handle collisions when setting', () => {
    const ht = new HashTable();
    ht.set('mmjosdl', 'foo');
    expect(ht.get('mmjosdl')).toEqual('foo');
    expect(ht.get('b')).toBeUndefined();
    ht.set('b', 'bar');
    expect(ht.get('mmjosdl')).toEqual('foo');
    expect(ht.get('b')).toEqual('bar');
  });
  it('Should handle collisions when deleting', () => {
    const ht = new HashTable();
    ht.set('mmjosdl', 'foo');
    ht.delete('b');
    ht.set('b', 'bar');
    ht.delete('mmjosdl');
    expect(ht.get('mmjosdl')).toBeUndefined();
    expect(ht.get('b')).toEqual('bar');
    ht.delete('b');
    expect(ht.get('b')).toBeUndefined();
  });
  it('Should return undefined if there\'s no value for a given key', () => {
    const ht = new HashTable();
    expect(ht.get('something')).toBeUndefined();
  });
  it('Should return an array with all keys', () => {
    const ht = new HashTable();
    ht.set('foo', 1);
    ht.set('bar', 2);
    ht.set('baz', 3);
    expect(ht.keys()).toEqual(['foo', 'bar', 'baz']);
  });
  it('Should return an array with all values', () => {
    const ht = new HashTable();
    ht.set('foo', 1);
    ht.set('bar', 2);
    ht.set('baz', 3);
    expect(ht.values()).toEqual([1, 2, 3]);
  });
});
