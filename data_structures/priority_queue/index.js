const swap = require('../../helpers/swap');
const Node = require('./node');

/**
 * This implementation uses an array to represent a binary heap by taking advantage
 * of two mathematical properties: for any node, the parent's index will be Math.floor((index-1)/2),
 * while the index of the left and right children will be 2*index + 1 and 2*index + 2, respectively
 */
class PriorityQueue {
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
   * Inserts a value into the priority queue
   * @param {Number} value The value to insert
   * @param {Number} priority The priority to be given to the node (0 being the highest)
   */
  enqueue(value, priority) {
    const node = new Node(value, priority);
    // Adds an element to the end of the heap
    this.values.push(node);
    let index = this.values.length - 1;
    // Compares the element's priority to its parent's and swaps until it's in the right place
    while (index > 0) {
      const parentIndex = PriorityQueue.getParent(index);
      if (this.values[index].priority >= this.values[parentIndex].priority) break;
      swap(this.values, index, parentIndex);
      index = parentIndex;
    }
  }

  /**
 * Removes the root of the priority queue and rearranges the remaining elements
 * @returns {Node} The first element in the queue
 */
  dequeue() {
    // Swaps the first and last elements
    swap(this.values, 0, this.values.length - 1);
    const priorityNode = this.values.pop();

    let index = 0;
    let leftIndex = 1;
    let rightIndex = 2;

    // Swaps the new root with its greatest child until it finds its correct spot
    while (leftIndex < this.values.length) {
      let newIndex;
      if (!this.values[rightIndex]) newIndex = leftIndex;
      else {
        newIndex = (this.values[leftIndex].priority < this.values[rightIndex].priority)
          ? leftIndex : rightIndex;
      }
      if (this.values[index].priority < this.values[newIndex].priority) break;
      swap(this.values, index, newIndex);
      index = newIndex;
      leftIndex = PriorityQueue.getLeftChild(index);
      rightIndex = PriorityQueue.getRightChild(index);
    }
    return priorityNode.val;
  }
}

module.exports = PriorityQueue;
