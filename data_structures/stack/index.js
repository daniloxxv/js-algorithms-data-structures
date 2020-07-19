const Node = require('./node');

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

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
