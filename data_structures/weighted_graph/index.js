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

    while (queue.length) {
      // Retrieving the edge with the lowest weight
      const currentVertex = queue.dequeue();

      // If the current node is the destination, there is no need to visit the rest of the nodes
      if (currentVertex === vertex2) break;

      if (!visited.has(currentVertex)) {
        visited.add(currentVertex);
        this.adjacencyList[currentVertex].forEach((next) => {
          // Calculating the distance from start to the next node following the current path
          const candidate = distanceFromStart[currentVertex] + next.weight;
          if (candidate < distanceFromStart[next.node]) {
            // If the distance is less than the previously registered value, update it
            distanceFromStart[next.node] = candidate;
            // Update the value of 'previous' to reflect the new path
            previous[next.node] = currentVertex;
          }
          // Adding the next node to the queue
          queue.enqueue(next.node, distanceFromStart[next.node]);
        });
      }
    }

    // Building the path
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
