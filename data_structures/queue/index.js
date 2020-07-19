const Node = require('./node');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

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
