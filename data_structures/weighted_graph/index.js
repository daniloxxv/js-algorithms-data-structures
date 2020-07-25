const PriorityQueue = require('../priority_queue');

class WeightedGraph {
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
   * @param {Number} weight The weight of the connection
   */
  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
    this.adjacencyList[vertex1].add({ node: vertex2, weight });
    this.adjacencyList[vertex2].add({ node: vertex1, weight });
  }

  /**
   * Find the shortest path between two vertices
   * @param {String} vertex1 The name of vertex 1
   * @param {String} vertex2 The name of vertex 2
   * */
  findShortestPath(vertex1, vertex2) {
    const distanceFromStart = {};
    const visited = new Set();

    // Using a priority queue so that edges with the lower weight are examined first
    const queue = new PriorityQueue();
    // Keeping track of the previous nodes so that the paths can be reconstructed
    const previous = {};

    Object.keys(this.adjacencyList).forEach((vertex) => {
      // Initialising the distances as Infinity for all vertices (except origin)
      distanceFromStart[vertex] = vertex === vertex1 ? 0 : Infinity;
      // Setting the previous node as null for all vertices
      previous[vertex] = null;
    });

    // Adding the origin to the priority queue
    queue.enqueue(vertex1, 0);

    while (queue.length && !visited.has(vertex2)) {
      // Retrieving the edge with the lowest weight
      const currentVertex = queue.dequeue();
      if (!visited.has(currentVertex)) {
        visited.add(currentVertex);
        this.adjacencyList[currentVertex].forEach((edge) => {
          // Calculating the distance from start to the edge vertex following the current path
          const newDistance = distanceFromStart[currentVertex] + edge.weight;
          if (newDistance < distanceFromStart[edge.node]) {
            // If the distance is less than the previously registered value, update it
            distanceFromStart[edge.node] = newDistance;
            // Update the value of 'previous' to reflect the new path
            previous[edge.node] = currentVertex;
          }
          queue.enqueue(edge.node, distanceFromStart[edge.node]);
        });
      }
    }

    // Reconstructing the path
    const path = [];
    let current = vertex2;
    while (current !== null) {
      path.push(current);
      current = previous[current];
    }
    return path.reverse();
  }
}

module.exports = WeightedGraph;
