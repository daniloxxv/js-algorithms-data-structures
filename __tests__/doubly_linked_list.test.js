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
  it('Should unshift a value to an empty list', () => {
    const linkedList = new LinkedList();
    linkedList.unshift('Some value');
    expect(linkedList.length).toEqual(1);
    expect(linkedList.head.val).toEqual('Some value');
    expect(linkedList.tail.val).toEqual('Some value');
    expect(linkedList.tail.next).toEqual(null);
  });
  it('Should unshift multiple values to a list', () => {
    const linkedList = new LinkedList();
    linkedList.unshift('Second value').unshift('First value');
    expect(linkedList.length).toEqual(2);
    expect(linkedList.head.val).toEqual('First value');
    expect(linkedList.tail.val).toEqual('Second value');
    expect(linkedList.head.next.val).toEqual('Second value');
  });
  it('Should get a value by index (high index)', () => {
    const linkedList = new LinkedList();
    linkedList.unshift('Fourth value').unshift('Third value').unshift('Second value').unshift('First value');
    expect(linkedList.get(1).val).toEqual('Second value');
  });
  it('Should get a value by index (low index)', () => {
    const linkedList = new LinkedList();
    linkedList.unshift('Fourth value').unshift('Third value').unshift('Second value').unshift('First value');
    expect(linkedList.get(2).val).toEqual('Third value');
  });
  it('Should return null when performing get with an invalid index', () => {
    const linkedList = new LinkedList();
    linkedList.unshift('Third value').unshift('Second value').unshift('First value');
    expect(linkedList.get(3)).toBeNull();
    expect(linkedList.get(-1)).toBeNull();
  });
  it('Should set a value at a given index', () => {
    const linkedList = new LinkedList();
    linkedList.unshift('Third value').unshift('Second value').unshift('First value');
    linkedList.set(1, 'New value');
    expect(linkedList.get(1).val).toEqual('New value');
  });
  it('Should return true when set is successful and false otherwise', () => {
    const linkedList = new LinkedList();
    linkedList.unshift('Third value').unshift('Second value').unshift('First value');
    const success = linkedList.set(1, 'New value');
    const failure = linkedList.set(10, 'New value');
    expect(success).toEqual(true);
    expect(failure).toEqual(false);
  });
});
