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
});
