const Node = require('./node');
const Queue = require('../queue');

class Tree {
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a value into the tree (following BST rules)
   * @param {any} val The value to insert
   * @returns The tree
   */
  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = node;
          break;
        }
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        }
        currentNode = currentNode.right;
      } else break;
    }
    return this;
  }

  /**
   * Finds a value in a tree
   * @param {any} val
   * @returns {Node} The node containing the value, if it exists in the tree; undefined otherwise
   */
  find(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) currentNode = currentNode.left;
      else if (val > currentNode.val) currentNode = currentNode.right;
      else return currentNode;
    }
    return undefined;
  }

  /**
   * Traverses the tree using breadth-first search
   * @returns {Array} An array of node values in the order in which they were visited
   */
  breadthFirstSearch() {
    const queue = new Queue();
    const visited = [];
    let current = this.root;
    queue.enqueue(current);
    while (queue.size) {
      current = queue.dequeue();
      if (current.left) queue.enqueue(current.left);
      if (current.right) queue.enqueue(current.right);
      visited.push(current.val);
    }
    return visited;
  }

  /**
   * Traverses the tree using pre-order DFS
   * @returns {Array} An array of node values in the order in which they were visited
   */
  depthFirstSearch() {
    const visited = [];
    function visit(node) {
      if (!node) return;
      visited.push(node.val);
      visit(node.left);
      visit(node.right);
    }
    visit(this.root);
    return visited;
  }

  /**
   * Traverses the tree using post-order DFS
   * @returns {Array} An array of node values in the order in which they were visited
   */
  depthFirstSearchPostOrder() {
    const visited = [];
    function visit(node) {
      if (!node) return;
      visit(node.left);
      visit(node.right);
      visited.push(node.val);
    }
    visit(this.root);
    return visited;
  }

  /**
   * Traverses the tree using in-order DFS
   * @returns {Array} An array of node values in the order in which they were visited
   */
  depthFirstSearchInOrder() {
    const visited = [];
    function visit(node) {
      if (!node) return;
      visit(node.left);
      visited.push(node.val);
      visit(node.right);
    }
    visit(this.root);
    return visited;
  }
}

module.exports = Tree;
