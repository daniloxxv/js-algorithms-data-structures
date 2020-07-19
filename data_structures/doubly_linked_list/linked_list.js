const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length -= 1;
    return removedNode.val;
  }

  shift() {
    if (!this.head) return undefined;
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length -= 1;
    return removedNode.val;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index < this.length / 2) {
      let currentNode = this.head;
      for (let i = 0; i < index; i += 1) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    let currentNode = this.tail;
    for (let i = this.length - 1; i > index; i -= 1) {
      currentNode = currentNode.prev;
    }
    return currentNode;
  }

  set(index, val) {
    const nodeToUpdate = this.get(index);
    if (nodeToUpdate === null) return false;
    nodeToUpdate.val = val;
    return true;
  }
}

module.exports = LinkedList;
