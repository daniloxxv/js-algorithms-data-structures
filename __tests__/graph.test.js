const expect = require('expect');
const Graph = require('../data_structures/graph');

describe('Graph', () => {
  it('Should add a vertex correctly', () => {
    const graph = new Graph();
    graph.addVertex('test');
    expect(graph.adjacencyList.test).toEqual(new Set());
  });
  it('Should add edges correctly', () => {
    const graph = new Graph();
    graph.addVertex('Paris');
    graph.addVertex('London');
    graph.addEdge('Paris', 'London');
    expect(graph.adjacencyList.Paris).toContain('London');
    expect(graph.adjacencyList.London).toContain('Paris');
  });
  it('Should not create an edge if one of the two vertices doesn\'t exist', () => {
    const graph = new Graph();
    graph.addEdge('Paris', 'London');
    graph.addVertex('Paris');
    graph.addEdge('Paris', 'London');
    expect(graph.adjacencyList.Paris).toEqual(new Set());
    expect(graph.adjacencyList.London).toBeUndefined();
  });
  it('Should not overwrite a vertex', () => {
    const graph = new Graph();
    graph.addVertex('Paris');
    graph.addVertex('London');
    graph.addEdge('Paris', 'London');
    graph.addVertex('London');
    expect(graph.adjacencyList.Paris).toContain('London');
    expect(graph.adjacencyList.London).toContain('Paris');
  });
  it('Should remove a connection between two vertices', () => {
    const graph = new Graph();
    graph.addVertex('Paris');
    graph.addVertex('London');
    graph.addEdge('Paris', 'London');
    graph.removeEdge('Paris', 'London');
    expect(graph.adjacencyList.Paris).toEqual(new Set());
    expect(graph.adjacencyList.London).toEqual(new Set());
  });
  it('Should do nothing on removeEdge if one of the vertices doesn\'t exist', () => {
    const graph = new Graph();
    graph.removeEdge('Paris', 'London');
    graph.addVertex('Paris');
    graph.removeEdge('Paris', 'London');
    expect(graph.adjacencyList.Paris).toEqual(new Set());
    expect(graph.adjacencyList.London).toBeUndefined();
  });
  it('Should remove a vertex and all its edges', () => {
    const graph = new Graph();
    graph.addVertex('Paris');
    graph.addVertex('London');
    graph.addEdge('Paris', 'London');
    graph.removeVertex('Paris');
    expect(graph.adjacencyList.Paris).toBeUndefined();
    expect(graph.adjacencyList.London.has('Paris')).toBeFalsy();
  });
  it('Should do nothing on removeVertex if the vertex doesn\'t exist', () => {
    const graph = new Graph();
    graph.addVertex('Paris');
    graph.addVertex('London');
    graph.addEdge('Paris', 'London');
    graph.removeVertex('Rome');
    expect(graph.adjacencyList.Paris).toContain('London');
    expect(graph.adjacencyList.London).toContain('Paris');
    expect(graph.adjacencyList.Rome).toBeUndefined();
  });
  it('Should perform recursive depth-first search correctly', () => {
    const graph = new Graph();
    ['A', 'B', 'C', 'D', 'E', 'F'].forEach((vertex) => graph.addVertex(vertex));
    [['A', 'B'], ['A', 'C'], ['B', 'D'], ['C', 'E'], ['D', 'E'], ['D', 'F'], ['E', 'F']].forEach((edge) => graph.addEdge(...edge));
    expect(graph.recursiveDFS('A')).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
  });
  it('Should perform iterative DFS correctly', () => {
    const graph = new Graph();
    ['A', 'B', 'C', 'D', 'E', 'F'].forEach((vertex) => graph.addVertex(vertex));
    [['A', 'B'], ['A', 'C'], ['B', 'D'], ['C', 'E'], ['D', 'E'], ['D', 'F'], ['E', 'F']].forEach((edge) => graph.addEdge(...edge));
    expect(graph.iterativeDFS('A')).toEqual(['A', 'C', 'E', 'F', 'D', 'B']);
  });
  it('Should perform BFS correctly', () => {
    const graph = new Graph();
    ['A', 'B', 'C', 'D', 'E', 'F'].forEach((vertex) => graph.addVertex(vertex));
    [['A', 'B'], ['A', 'C'], ['B', 'D'], ['C', 'E'], ['D', 'E'], ['D', 'F'], ['E', 'F']].forEach((edge) => graph.addEdge(...edge));
    expect(graph.BFS('A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });
});
