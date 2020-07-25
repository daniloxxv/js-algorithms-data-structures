const expect = require('expect');
const Graph = require('../data_structures/weighted_graph');

describe('Weighted graph', () => {
  it('Should find the shortest path correctly', () => {
    const graph = new Graph();
    ['A', 'B', 'C', 'D', 'E', 'F'].forEach((vertex) => graph.addVertex(vertex));
    [['A', 'B', 3], ['A', 'C', 4], ['A', 'D', 8], ['B', 'D', 2], ['C', 'E', 2], ['D', 'E', 2], ['D', 'F', 1], ['E', 'F', 2]].forEach((edge) => graph.addEdge(...edge));
    expect(graph.findShortestPath('A', 'F')).toEqual(['A', 'B', 'D', 'F']);
    expect(graph.findShortestPath('A', 'D')).toEqual(['A', 'B', 'D']);
  });
});
