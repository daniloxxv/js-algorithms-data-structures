const expect = require('expect');
const getRandomCharSequence = require('./helpers/getRandomCharSequence');
const PriorityQueue = require('../data_structures/priority_queue');

describe('Priority queue', () => {
  it('Inserts and removes elements in order of priority', () => {
    const queue = new PriorityQueue();
    queue.enqueue('Something unimportant', 5);
    queue.enqueue('Something critical', 1);
    queue.enqueue('Something slightly more important', 4);
    queue.enqueue('Something urgent, but not critical', 2);
    queue.enqueue('Something important, but not urgent', 3);
    expect(queue.dequeue()).toEqual('Something critical');
    expect(queue.dequeue()).toEqual('Something urgent, but not critical');
    expect(queue.dequeue()).toEqual('Something important, but not urgent');
    expect(queue.dequeue()).toEqual('Something slightly more important');
    expect(queue.dequeue()).toEqual('Something unimportant');
  });
  it('Should handle a large amount of data', () => {
    const queue = new PriorityQueue();
    const arr = [];
    for (let i = 0; i < 1000; i += 1) {
      const entry = getRandomCharSequence();
      const priority = i;
      arr.push({ entry, priority });
      queue.enqueue(entry, priority);
    }
    for (let i = 0; i < 1000; i += 1) {
      expect(queue.dequeue()).toEqual(arr.shift().entry);
    }
  });
});
