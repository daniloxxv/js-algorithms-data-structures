const swap = require('../../helpers/swap');

/**
 * This implementation uses an array to represent a binary heap by taking advantage
 * of two mathematical properties: for any node, the parent's index will be Math.floor((index-1)/2),
 * while the index of the left and right children will be 2*index + 1 and 2*index + 2, respectively
 */
class Heap {
  constructor() {
    this.values = [];
  }

  /**
   * Inserts a value into the binary heap
   * @param {Number} value The value to insert
   */
  insert(value) {
    // Adds an element to the end of the heap
    this.values.push(value);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    // Compares the element to its parent and swaps until it's in the right place
    while (value > this.values[parentIndex] && index > 0) {
      swap(this.values, index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  /**
 * Removes the root of the binary heap and rearranges
 * @returns {Number} The root
 */
  extractMax() {
    // Swaps the first and last elements
    swap(this.values, 0, this.values.length - 1);

    // Bubbles the new root down the tree until it finds its correct spot
    let index = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;
    while (this.values[index] < this.values[leftChildIndex]
        || this.values[index] < this.values[rightChildIndex]) {
      const greatestChildIndex = (this.values[leftChildIndex] > this.values[rightChildIndex])
        ? leftChildIndex : rightChildIndex;
      swap(this.values, index, greatestChildIndex);
      index = greatestChildIndex;
      leftChildIndex = 2 * index + 1;
      rightChildIndex = 2 * index + 2;
    }
    return this.values.pop();
  }
}

module.exports = Heap;
