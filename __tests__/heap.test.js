const expect = require('expect');
const BinaryHeap = require('../data_structures/binary_heap');

describe('Binary heap', () => {
  it('Inserts an element into the correct spot', () => {
    const heap = new BinaryHeap();
    heap.insert(30);
    heap.insert(20);
    heap.insert(10);
    heap.insert(25);
    expect(heap.values).toEqual([30, 25, 10, 20]);
    heap.insert(100);
    expect(heap.values).toEqual([100, 30, 10, 20, 25]);
  });
  it('Removes the root and rearranges the heap correctly', () => {
    const heap = new BinaryHeap();
    heap.insert(41);
    heap.insert(39);
    heap.insert(33);
    heap.insert(18);
    heap.insert(27);
    heap.insert(12);
    const maxElement = heap.extractMax();
    expect(maxElement).toEqual(41);
    expect(heap.values).toEqual([39, 27, 33, 18, 12]);
  });
  it('Performs remove correctly for a heap with a single value', () => {
    const heap = new BinaryHeap();
    heap.insert(41);
    const maxElement = heap.extractMax();
    expect(maxElement).toEqual(41);
    expect(heap.values).toEqual([]);
  });
});
