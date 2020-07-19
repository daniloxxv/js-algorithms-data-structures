const Node = require('./node');

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
    for (;;) {
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
}

module.exports = Tree;
