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
      node.prev = this.tail;
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

  /**
   * Removes an element from the beginning of the linked list
   * @returns {any} The removed element (or undefined if the list is empty)
   */
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
      this.head.prev = node;
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

  /**
   * Updates the value of a node at a given index
   * @param {Number} index The index of the node to update
   * @param {any} val The new value
   * @returns {Boolean} true if the operation is successful, false if the index was invalid
   */
  set(index, val) {
    const nodeToUpdate = this.get(index);
    if (nodeToUpdate === null) return false;
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

  /**
   * Removes an element from the list at a given index
   * @param {Number} index The index
   * @returns {Node|undefined} The removed node (or undefined if the index is invalid)
   */
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

  /**
   * Reverses the linked list in place
   * @returns {LinkedList} The reversed linked list
   */
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    for (let i = 0; i < this.length; i += 1) {
      const temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = currentNode.prev;
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
