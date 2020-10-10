const Node = require('./node');
const Queue = require('../queue');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a value into the binary tree (following BST rules)
   * @param {any} val The value to insert
   * @returns The binary tree
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
   * Finds a value in a binary tree
   * @param {any} val
   * @returns {Node} The node containing the value, if it exists in the binary tree; undefined otherwise
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
   * Traverses the binary tree using breadth-first search
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
   * Traverses the binary tree using pre-order DFS
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
   * Traverses the binary tree using post-order DFS
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
   * Traverses the binary tree using in-order DFS
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

  /**
   * 
   * @param {number} val The value to remove
   * @param {null|BinaryTree} parentNode 
   */
  remove(val, parentNode = null) {
    let currentNode = this.root;
		// Finding the node to remove
		while (currentNode){
			if (val < currentNode.val){
				parentNode = currentNode;
				currentNode = currentNode.left;
			}
			else if (val > currentNode.val){
				parentNode = currentNode;
				currentNode = currentNode.right;
			}
			// When we find the node
			else {
				// If the node we are removing has two child nodes
				if (currentNode.left && currentNode.right){
					// Stored the leftmost value in the right side of the binary tree
          let temp = this.getMinValue(currentNode.right);
					// Remove the leftmost value 
          this.remove(temp, currentNode);
          // Assign the stored value to the current node
          currentNode.val = temp;
					return this;
				}
				// If only the node we are removing only has a parent and only one child node, we change the currentNode's parent to point to the child
				if (parentNode) {
					// Rearranging branches 
					if (parentNode.left === currentNode){
						parentNode.left = currentNode.left ? currentNode.left : currentNode.right;
					}
					else {
            parentNode.right = currentNode.left ? currentNode.left : currentNode.right;
					}
					return this;
				}
				// If we're removing the root node and it has only a left child
				if (currentNode.left){
						currentNode.val = currentNode.left.val;
						currentNode.right = currentNode.left.right;
						currentNode.left = currentNode.left.left;
					}
					// If we're removing the root node and it has only a right child
					else if (currentNode.right){
						currentNode.val = currentNode.right.val;
						currentNode.left = currentNode.right.left;
						currentNode.right = currentNode.right.right;
					}
          // If we're removing the root and it has no children, set the root to null 
          else {
            this.root = null;
          }
				return this;
			}
		}
  }
  
  /**
   * Returns the minimum value among a node's children
   * @param {Node} node The node where the search should begin
   */
	getMinValue(node){
    let currentNode = node;
		while (currentNode.left){
			currentNode = currentNode.left;
    }
		return currentNode.val;
	}
}

module.exports = BinaryTree;
