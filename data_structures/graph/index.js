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
}

module.exports = Graph;
