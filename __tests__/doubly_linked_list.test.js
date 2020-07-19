const expect = require('expect');
const LinkedList = require('../data_structures/doubly_linked_list/linked_list');

describe('Doubly linked list', () => {
  it('Should create an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.length).toEqual(0);
  });
  it('Should push a value to an empty list', () => {
    const linkedList = new LinkedList();
    linkedList.push('Some value');
    expect(linkedList.length).toEqual(1);
    expect(linkedList.head.val).toEqual('Some value');
    expect(linkedList.tail.val).toEqual('Some value');
    expect(linkedList.tail.next).toEqual(null);
    expect(linkedList.tail.prev).toEqual(null);
  });
  it('Should push multiple values to a list', () => {
    const linkedList = new LinkedList();
    linkedList.push('Some value').push('Some other value');
    expect(linkedList.length).toEqual(2);
    expect(linkedList.head.val).toEqual('Some value');
    expect(linkedList.tail.val).toEqual('Some other value');
    expect(linkedList.head.next.val).toEqual('Some other value');
    expect(linkedList.tail.prev.val).toEqual('Some value');
  });

  it('Should pop a value from the list', () => {
    const linkedList = new LinkedList();
    linkedList.push('Some value').push('Some other value which will be removed').pop();
    expect(linkedList.tail.val).toEqual('Some value');
    expect(linkedList.length).toEqual(1);
  });
  it('Should return the last node\'s value on pop', () => {
    const linkedList = new LinkedList();
    linkedList.push('Some value').push('Some other value').push('The last value');
    expect(linkedList.pop()).toEqual('The last value');
  });
  it('Should set the head to null if there are no elements left after pop', () => {
    const linkedList = new LinkedList();
    linkedList.push('Some value').push('Some other value').push('The last value');
    while (linkedList.length) {
      linkedList.pop();
    }
    expect(linkedList.head).toBeNull();
  });
  it('Should return undefined if pop is called on an empty list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.pop()).toBeUndefined();
    expect(linkedList.length).toEqual(0);
  });
  it('Should remove the first element when shift is called', () => {
    const linkedList = new LinkedList();
    linkedList.push('Some value').push('Some other value').push('The last value');
    linkedList.shift();
    expect(linkedList.head.val).toEqual('Some other value');
  });
  it('Should return the first element value when shift is called', () => {
    const linkedList = new LinkedList();
    linkedList.push('Some value').push('Some other value').push('The last value');
    expect(linkedList.shift()).toEqual('Some value');
  });
  it('Should empty the list if it has just one element', () => {
    const linkedList = new LinkedList();
    linkedList.push('something').shift();
    expect(linkedList.length).toEqual(0);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });
  it('Should return undefined if shift is called on an empty list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.shift()).toBeUndefined();
    expect(linkedList.length).toEqual(0);
  });
});
