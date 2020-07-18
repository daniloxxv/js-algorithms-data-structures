const expect = require('expect');
const LinkedList = require('../data_structures/linked_list/linked_list');

describe('Singly linked list', () => {
  it('Should create an empty linked list', () => {
    const linkedlist = new LinkedList();
    expect(linkedlist.length).toEqual(0);
  });
  it('Should push a value to an empty list', () => {
    const linkedlist = new LinkedList();
    linkedlist.push('Some value');
    expect(linkedlist.length).toEqual(1);
    expect(linkedlist.head.val).toEqual('Some value');
    expect(linkedlist.tail.val).toEqual('Some value');
    expect(linkedlist.tail.next).toEqual(null);
  });
  it('Should push multiple values to a list', () => {
    const linkedlist = new LinkedList();
    linkedlist.push('Some value').push('Some other value');
    expect(linkedlist.length).toEqual(2);
    expect(linkedlist.head.val).toEqual('Some value');
    expect(linkedlist.tail.val).toEqual('Some other value');
    expect(linkedlist.head.next.val).toEqual('Some other value');
  });
  it('Should pop a value from the list', () => {
    const linkedlist = new LinkedList();
    linkedlist.push('Some value').push('Some other value which will be removed').pop();
    expect(linkedlist.tail.val).toEqual('Some value');
    expect(linkedlist.length).toEqual(1);
  });
  it('Should return the last node\'s value on pop', () => {
    const linkedlist = new LinkedList();
    linkedlist.push('Some value').push('Some other value').push('The last value');
    expect(linkedlist.pop()).toEqual('The last value');
  });
  it('Should set the head to null if there are no elements left after pop', () => {
    const linkedlist = new LinkedList();
    linkedlist.push('Some value').push('Some other value').push('The last value');
    while (linkedlist.length) {
      linkedlist.pop();
    }
    expect(linkedlist.head).toBeNull();
  });
  it('Should return undefined if pop is called on an empty list', () => {
    const linkedlist = new LinkedList();
    expect(linkedlist.pop()).toBeUndefined();
    expect(linkedlist.length).toEqual(0);
  });
  it('Should remove the first element when pop is called', () => {
    const linkedlist = new LinkedList();
    linkedlist.push('Some value').push('Some other value').push('The last value');
    linkedlist.shift();
    expect(linkedlist.head.val).toEqual('Some other value');
  });
  it('Should return the first element value when pop is called', () => {
    const linkedlist = new LinkedList();
    linkedlist.push('Some value').push('Some other value').push('The last value');
    expect(linkedlist.shift()).toEqual('Some value');
  });
  it('Should return undefined if shift is called on an empty list', () => {
    const linkedlist = new LinkedList();
    expect(linkedlist.shift()).toBeUndefined();
    expect(linkedlist.length).toEqual(0);
  });
  it('Should unshift a value to an empty list', () => {
    const linkedlist = new LinkedList();
    linkedlist.unshift('Some value');
    expect(linkedlist.length).toEqual(1);
    expect(linkedlist.head.val).toEqual('Some value');
    expect(linkedlist.tail.val).toEqual('Some value');
    expect(linkedlist.tail.next).toEqual(null);
  });
  it('Should unshift multiple values to a list', () => {
    const linkedlist = new LinkedList();
    linkedlist.unshift('Second value').unshift('First value');
    expect(linkedlist.length).toEqual(2);
    expect(linkedlist.head.val).toEqual('First value');
    expect(linkedlist.tail.val).toEqual('Second value');
    expect(linkedlist.head.next.val).toEqual('Second value');
  });
});
