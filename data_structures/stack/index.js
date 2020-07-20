const Node = require('./node');

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Adds a value to the top of the stack
   * @param {any} val The value to add
   * @returns {Number} The size of the stack
   */
  push(val) {
    this.size += 1;
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    return this.size;
  }

  /**
   * Removes an element from the top of the stack
   * @returns {any} The removed element (or undefined if the stack is empty)
   */
  pop() {
    if (!this.size) return undefined;
    this.size -= 1;
    const removedNode = this.first;
    if (!this.size) {
      this.last = null;
    }
    this.first = this.first.next;
    return removedNode.val;
  }
}

module.exports = Stack;
