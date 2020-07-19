const Node = require('./node');
const Queue = require('../queue');

class Tree {
  constructor() {
    this.root = null;
  }

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

  find(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (val < currentNode.val) currentNode = currentNode.left;
      else if (val > currentNode.val) currentNode = currentNode.right;
      else return currentNode;
    }
    return undefined;
  }

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
