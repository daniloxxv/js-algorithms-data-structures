const Node = require('./node');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Adds a value to the end of the queue
   * @param {any} val The value to add
   * @returns {Number} The size of the queue
   */
  enqueue(val) {
    const node = new Node(val);
    if (!this.size) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size += 1;
    return this.size;
  }

  /**
   * Removes an element from the beginning of the queue
   * @returns {any} The removed element (or undefined if the queue is empty)
   */
  dequeue() {
    if (!this.size) return undefined;
    const current = this.first;
    this.first = current.next;
    this.size -= 1;
    if (!this.size) this.last = null;
    return current.val;
  }
}

module.exports = Queue;
