const expect = require('expect');
const Graph = require('../data_structures/weighted_graph');

describe('Weighted graph', () => {
  it('Should find the shortest path correctly', () => {
    const graph = new Graph();
    ['A', 'B', 'C', 'D', 'E', 'F'].forEach((vertex) => graph.addVertex(vertex));
    [['A', 'B', 4], ['A', 'C', 2], ['B', 'E', 3], ['C', 'D', 2], ['C', 'F', 4], ['D', 'E', 3], ['D', 'F', 1], ['E', 'F', 1]].forEach((edge) => graph.addEdge(...edge));
    expect(graph.findShortestPath('A', 'E')).toEqual(['A', 'C', 'D', 'F', 'E']);
  });
  it('Should not create an edge if one of the vertices doesn\'t exist', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    const adjacencyList = { ...graph.adjacencyList };
    graph.addEdge('A', 'C');
    expect(graph.adjacencyList).toEqual(adjacencyList);
  });
});
