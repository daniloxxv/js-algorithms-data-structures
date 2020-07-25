const Stack = require('../stack');
const Queue = require('../queue');

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Adds a vertex to the list
   * @param {String} name The name of the vertex
   */
  addVertex(name) {
    if (this.adjacencyList[name]) return;
    this.adjacencyList[name] = new Set();
  }

  /**
   * Connects two vertices
   * @param {String} vertex1 The name of vertex 1
   * @param {String} vertex2 The name of vertex 2
   */
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  /**
   * Remove a connection between two vertices
   * @param {String} vertex1 The name of vertex 1
   * @param {String} vertex2 The name of vertex 2
   */
  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
    this.adjacencyList[vertex2].delete(vertex1);
    this.adjacencyList[vertex1].delete(vertex2);
  }

  /**
   * Remove a vertex
   * @param {String} name The name of vertex 1
   */
  removeVertex(name) {
    if (!this.adjacencyList[name]) return;
    this.adjacencyList[name].forEach((vertex) => {
      this.adjacencyList[vertex].delete(name);
    });
    delete this.adjacencyList[name];
  }

  /**
   * Traverses the graph with recursive DFS starting from a vertex
   * @param {String} start The name of the starting vertex
   */
  recursiveDFS(start) {
    const visited = new Set();
    const result = [];
    const DFS = (vertex) => {
      visited.add(vertex);
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) DFS(neighbor);
      });
    };
    DFS(start);
    return result;
  }

  /**
   * Traverses the graph with recursive DFS starting from a vertex
   * @param {String} start The name of the starting vertex
   */
  iterativeDFS(start) {
    const visited = new Set();
    const result = [];
    const stack = new Stack();
    stack.push(start);
    let currentVertex;
    while (stack.size) {
      currentVertex = stack.pop();
      if (!visited.has(currentVertex)) {
        visited.add(currentVertex);
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach((neighbor) => stack.push(neighbor));
      }
    }
    return result;
  }

  /** Traverses the graph with recursive DFS starting from a vertex
  * @param {String} start The name of the starting vertex
  */
  BFS(start) {
    const visited = new Set();
    const result = [];
    const queue = new Queue();
    queue.enqueue(start);
    let currentVertex;
    while (queue.size) {
      currentVertex = queue.dequeue();
      if (!visited.has(currentVertex)) {
        visited.add(currentVertex);
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach((neighbor) => queue.enqueue(neighbor));
      }
    }
    return result;
  }
}

module.exports = Graph;
