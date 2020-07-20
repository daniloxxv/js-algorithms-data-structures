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
   * Gets the index of the parent node of an element in a given index
   * @param {Number} index The index
   * @returns {Number} The parent node index
   */
  static getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * Gets the index of the left child of an element in a given index
   * @param {Number} index The index
   * @returns {Number} The left child index
   */
  static getLeftChild(index) {
    return 2 * index + 1;
  }

  /**
   * Gets the index of the right child of an element in a given index
   * @param {Number} index The index
   * @returns {Number} The right child index
   */
  static getRightChild(index) {
    return 2 * index + 2;
  }

  /**
   * Inserts a value into the binary heap
   * @param {Number} value The value to insert
   */
  insert(value) {
    // Adds an element to the end of the heap
    this.values.push(value);
    let index = this.values.length - 1;
    // Compares the element to its parent and swaps until it's in the right place
    while (index > 0) {
      const parentIndex = Heap.getParent(index);
      if (this.values[index] < this.values[parentIndex]) break;
      swap(this.values, index, parentIndex);
      index = parentIndex;
    }
  }

  /**
 * Removes the root of the binary heap and rearranges
 * @returns {Number} The root
 */
  extractMax() {
    // Swaps the first and last elements
    swap(this.values, 0, this.values.length - 1);

    let index = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;

    // Swaps the new root with its greatest child until it finds its correct spot
    while (this.values[index] < this.values[leftChildIndex]
        || this.values[index] < this.values[rightChildIndex]) {
      const greatestChildIndex = (this.values[leftChildIndex] > this.values[rightChildIndex])
        ? leftChildIndex : rightChildIndex;
      swap(this.values, index, greatestChildIndex);
      index = greatestChildIndex;
      leftChildIndex = Heap.getLeftChild(index);
      rightChildIndex = Heap.getRightChild(index);
    }
    return this.values.pop();
  }
}

module.exports = Heap;
