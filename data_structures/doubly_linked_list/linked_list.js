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

  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    const prevNode = this.get(index - 1);
    if (prevNode === null) return false;
    const newNode = new Node(val);
    const { next } = prevNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = next;
    next.prev = newNode;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();

    if (index === this.length) return this.pop();
    const nodeToRemove = this.get(index);
    if (nodeToRemove === null) return undefined;
    const { prev, next } = nodeToRemove;
    prev.next = next;
    next.prev = prev;
    nodeToRemove.prev = null;
    nodeToRemove.next = null;
    this.length -= 1;
    return nodeToRemove;
  }
}

module.exports = LinkedList;
