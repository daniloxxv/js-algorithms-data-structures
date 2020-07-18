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
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let previousNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      previousNode.next = null;
      this.tail = previousNode;
    }
    return currentNode.val;
  }

  shift() {
    if (!this.length) return undefined;
    const returnValue = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    return returnValue;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i += 1) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, val) {
    const nodeToUpdate = this.get(index);
    if (!nodeToUpdate) return false;
    nodeToUpdate.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) this.unshift(val);
    else if (index === this.length) this.push(val);
    else {
      const previousNode = this.get(index - 1);
      const nextNode = previousNode.next;
      previousNode.next = new Node(val);
      previousNode.next.next = nextNode;
      this.length += 1;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length -= 1;
    return removed;
  }
}

module.exports = LinkedList;
