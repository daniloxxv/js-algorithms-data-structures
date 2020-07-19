const expect = require('expect');
const Tree = require('../data_structures/tree');

describe('Tree', () => {
  it('Sets a root when inserting into an empty tree', () => {
    const tree = new Tree();
    tree.insert(1);
    expect(tree.root.val).toEqual(1);
  });
  it('Inserts a value to the left if it\'s smaller than the root', () => {
    const tree = new Tree();
    tree.insert(3);
    tree.insert(1);
    expect(tree.root.left.val).toEqual(1);
  });
  it('Inserts a value to the right if it\'s greater than the root', () => {
    const tree = new Tree();
    tree.insert(3);
    tree.insert(4);
    expect(tree.root.right.val).toEqual(4);
  });
  it('Insert correctly with multiple levels', () => {
    const tree = new Tree();
    tree.insert(5).insert(3).insert(1).insert(2)
      .insert(8)
      .insert(6)
      .insert(9);
    expect(tree.root.left.left.val).toEqual(1);
    expect(tree.root.left.left.right.val).toEqual(2);
    expect(tree.root.right.left.val).toEqual(6);
    expect(tree.root.right.right.val).toEqual(9);
  });
  it('Ignores duplicates on insert', () => {
    const tree = new Tree();
    tree.insert(10).insert(10);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });
  it('Returns a node when searching for a value that is in the tree', () => {
    const tree = new Tree();
    tree.insert(5).insert(3).insert(1).insert(2)
      .insert(8)
      .insert(6)
      .insert(9);
    expect(tree.find(1).val).toEqual(1);
    expect(tree.find(5).val).toEqual(5);
    expect(tree.find(6).val).toEqual(6);
    expect(tree.find(9).val).toEqual(9);
  });
  it('Returns undefined when searching for a value that is not in the tree', () => {
    const tree = new Tree();
    tree.insert(5).insert(3).insert(1).insert(2)
      .insert(8)
      .insert(6)
      .insert(10);
    expect(tree.find(0)).toEqual(undefined);
    expect(tree.find(4)).toEqual(undefined);
    expect(tree.find(9)).toEqual(undefined);
    expect(tree.find(99)).toEqual(undefined);
  });
  it('Returns undefined when searching for a value in an empty tree', () => {
    const tree = new Tree();
    expect(tree.find(4)).toEqual(undefined);
  });
  it('Should traverse nodes in the right order for Breadth-First Search', () => {
    const tree = new Tree();
    tree.insert(5).insert(3).insert(1).insert(2)
      .insert(8)
      .insert(6)
      .insert(10)
      .insert(11);
    expect(tree.breadthFirstSearch()).toEqual([5, 3, 8, 1, 6, 10, 2, 11]);
  });
  it('Should traverse nodes in the right order for pre-order Depth-First Search', () => {
    const tree = new Tree();
    tree.insert(5).insert(3).insert(1).insert(2)
      .insert(8)
      .insert(6)
      .insert(6)
      .insert(7)
      .insert(10)
      .insert(11);
    expect(tree.depthFirstSearch()).toEqual([5, 3, 1, 2, 8, 6, 7, 10, 11]);
  });
  it('Should traverse nodes in the right order for post-order Depth-First Search', () => {
    const tree = new Tree();
    tree.insert(10).insert(6).insert(15).insert(3)
      .insert(8)
      .insert(20);
    expect(tree.depthFirstSearchPostOrder()).toEqual([3, 8, 6, 20, 15, 10]);
  });
  it('Should traverse nodes in the right order for in-order Depth-First Search', () => {
    const tree = new Tree();
    tree.insert(10).insert(6).insert(15).insert(3)
      .insert(8)
      .insert(20);
    expect(tree.depthFirstSearchInOrder()).toEqual([3, 6, 8, 10, 15, 20]);
  });
});