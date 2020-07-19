const expect = require('expect');
const LinkedList = require('../data_structures/linked_list/linked_list');
const compareLists = require('./helpers/compareLists');
const generateLinkedListFromArray = require('./helpers/generateLinkedListFromArray');

describe('Singly linked list', () => {
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
  });
  it('Should push multiple values to a list', () => {
    const linkedList = new LinkedList();
    linkedList.push('Some value').push('Some other value');
    expect(linkedList.length).toEqual(2);
    expect(linkedList.head.val).toEqual('Some value');
    expect(linkedList.tail.val).toEqual('Some other value');
    expect(linkedList.head.next.val).toEqual('Some other value');
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
  it('Should get a value by index', () => {
    const linkedList = new LinkedList();
    linkedList.unshift('Third value').unshift('Second value').unshift('First value');
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
  it('Should insert a value at a given index', () => {
    const linkedList = new LinkedList();
    linkedList.unshift('Fourth value').unshift('Third value').unshift('First value');
    linkedList.insert(1, 'Second value');
    const insertedNode = linkedList.get(1);
    expect(linkedList.get(0).next).toBe(insertedNode);
    expect(insertedNode.val).toEqual('Second value');
    expect(insertedNode.next.val).toEqual('Third value');
    expect(linkedList.length).toEqual(4);
  });
  it('Should behave like push when insert is called with an index of linkedList.length', () => {
    const linkedList = new LinkedList();
    linkedList.insert(linkedList.length, 'Some value');
    linkedList.insert(linkedList.length, 'Some other value');
    expect(linkedList.length).toEqual(2);
    expect(linkedList.head.val).toEqual('Some value');
    expect(linkedList.tail.val).toEqual('Some other value');
    expect(linkedList.head.next.val).toEqual('Some other value');
  });
  it('Should behave like unshift when insert is called with an index of 0', () => {
    const linkedList = new LinkedList();
    linkedList.insert(0, 'Second value');
    linkedList.insert(0, 'First value');
    expect(linkedList.length).toEqual(2);
    expect(linkedList.head.val).toEqual('First value');
    expect(linkedList.tail.val).toEqual('Second value');
    expect(linkedList.head.next.val).toEqual('Second value');
  });
  it('Should return true when insert is successful and false otherwise', () => {
    const linkedList = new LinkedList();
    linkedList.unshift('Fourth value').unshift('Third value').unshift('First value');
    const success = linkedList.insert(1, 'New value');
    const failure = linkedList.insert(10, 'New value');
    expect(success).toEqual(true);
    expect(failure).toEqual(false);
  });
  it('Should remove a value at a given index', () => {
    const linkedList = new LinkedList();
    linkedList.unshift('Third value').unshift('Second value').unshift('First value');
    const removed = linkedList.remove(1);
    const newNodeAtIndex = linkedList.get(1);
    expect(newNodeAtIndex.val).toBe('Third value');
    expect(newNodeAtIndex.next).toBeNull();
    expect(linkedList.length).toEqual(2);
    expect(removed.val).toEqual('Second value');
  });
  it('Should behave like pop when remove is called with an index of linkedList.length', () => {
    const linkedList = new LinkedList();
    linkedList.push('Some value').push('Some other value which will be removed').remove(linkedList.length);
    expect(linkedList.tail.val).toEqual('Some value');
    expect(linkedList.length).toEqual(1);
  });
  it('Should behave like shift when remove is called with an index of 0', () => {
    const linkedList = new LinkedList();
    linkedList.push('Some value').push('Some other value').push('The last value');
    linkedList.remove(0);
    expect(linkedList.head.val).toEqual('Some other value');
  });
  it('Should return the removed node when the operation is successful and undefined otherwise', () => {
    const linkedList = new LinkedList();
    linkedList.push('Some value').push('Some other value').push('The last value');
    const node1 = linkedList.get(1);
    const removed = linkedList.remove(1);
    expect(node1).toBe(removed);
    expect(linkedList.remove(10)).toBeUndefined();
  });
  it('Should reverse a linked list in place', () => {
    const randomArray = Array.from({ length: Math.floor(Math.random() * 1000) },
      () => Math.floor(Math.random() * 1000));
    const linkedList = generateLinkedListFromArray(randomArray, LinkedList);
    const listToCompare = generateLinkedListFromArray(randomArray.reverse(), LinkedList);
    linkedList.reverse();
    expect(compareLists(linkedList, listToCompare)).toBeTruthy();
  });
  it('Should handle reversing a single-element list', () => {
    const linkedList = generateLinkedListFromArray([1], LinkedList);
    const listToCompare = generateLinkedListFromArray([1], LinkedList);
    linkedList.reverse();
    expect(compareLists(linkedList, listToCompare)).toBeTruthy();
  });
  it('Should handle reversing an empty list', () => {
    const linkedList = generateLinkedListFromArray([1], LinkedList);
    const listToCompare = generateLinkedListFromArray([1], LinkedList);
    linkedList.reverse();
    expect(compareLists(linkedList, listToCompare)).toBeTruthy();
  });
  it('Should generate a string representation of the linked list', () => {
    const linkedList = generateLinkedListFromArray([1, 2, 3, 4, 5], LinkedList);
    expect(linkedList.toString()).toEqual([1, 2, 3, 4, 5].join(' -> '));
  });
});
