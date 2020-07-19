const expect = require('expect');
const Queue = require('../data_structures/queue');

describe('Queue', () => {
  it('Should be "first in, first out"', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
  });
  it('Should return update the size property', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size).toEqual(3);
  });
  it('Should not allow a dequeue from an empty queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.dequeue();
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.size).toEqual(0);
  });
});
