const expect = require('expect');
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
});
