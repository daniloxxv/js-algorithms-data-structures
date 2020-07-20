const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a value to the end of the linked list
   * @param {any} val The value to add
   * @returns {LinkedList} The linked list
   */
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

  /**
   * Removes an element from the end of the linked list
   * @returns {any} The removed element (or undefined if the list is empty)
   */
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

  /**
   * Removes an element from the beginning of the linked list
   * @returns {any} The removed element (or undefined if the list is empty)
   */
  shift() {
    if (!this.length) return undefined;
    const returnValue = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    return returnValue;
  }

  /**
   * Adds a value to the beginning of the linked list
   * @param {any} val The value to add
   * @returns {LinkedList} The linked list
   */
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

  /**
   * Retrieves the node at a given index
   * @param {Number} index The index
   * @returns {Node|null} The node at the given index, or null if the index is invalid
   */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i += 1) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * Updates the value of a node at a given index
   * @param {Number} index The index of the node to update
   * @param {any} val The new value
   * @returns {Boolean} true if the operation is successful, false if the index was invalid
   */
  set(index, val) {
    const nodeToUpdate = this.get(index);
    if (!nodeToUpdate) return false;
    nodeToUpdate.val = val;
    return true;
  }

  /**
   * Adds a value to the list at a given index
   * @param {Number} index The index in which to insert the node
   * @param {any} val The new value
   * @returns {Boolean} true if the operation is successful, false if the index was invalid
   */
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

  /**
   * Removes an element from the list at a given index
   * @param {Number} index The index
   * @returns {Node|undefined} The removed node (or undefined if the index is invalid)
   */
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

  /**
   * Reverses the linked list in place
   * @returns {LinkedList} The reversed linked list
   */
  reverse() {
    let currentNode = this.head;
    let previousNode = null;
    let nextNode = currentNode.next;
    this.head = this.tail;
    this.tail = currentNode;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }

  /**
   * Creates a string representation of the linked list
   * @returns {String} A string containing all the list's values connected by an arrow
   */
  toString() {
    let currentNode = this.head;
    let res = '';
    while (currentNode.next) {
      res += `${currentNode.val} -> `;
      currentNode = currentNode.next;
    }
    res += currentNode.val;
    return res;
  }
}

module.exports = LinkedList;
