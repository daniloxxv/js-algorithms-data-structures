const expect = require('expect');
const BinaryTree = require('../data_structures/tree');

describe('BinaryTree', () => {
  it('Sets a root when inserting into an empty tree', () => {
    const tree = new BinaryTree();
    tree.insert(1);
    expect(tree.root.val).toEqual(1);
  });
  it('Inserts a value to the left if it\'s smaller than the root', () => {
    const tree = new BinaryTree();
    tree.insert(3);
    tree.insert(1);
    expect(tree.root.left.val).toEqual(1);
  });
  it('Inserts a value to the right if it\'s greater than the root', () => {
    const tree = new BinaryTree();
    tree.insert(3);
    tree.insert(4);
    expect(tree.root.right.val).toEqual(4);
  });
  it('Insert correctly with multiple levels', () => {
    const tree = new BinaryTree();
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
    const tree = new BinaryTree();
    tree.insert(10).insert(10);
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });
  it('Returns a node when searching for a value that is in the tree', () => {
    const tree = new BinaryTree();
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
    const tree = new BinaryTree();
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
    const tree = new BinaryTree();
    expect(tree.find(4)).toEqual(undefined);
  });
  it('Should remove a value with a left child', ()=>{
    const tree = new BinaryTree();
    tree.insert(5).insert(3).insert(1).insert(2)
      .insert(8)
      .insert(6)
      .insert(9);
    tree.remove(3);
    expect(tree.find(3)).toEqual(undefined);
    expect(tree.root.left.val).toEqual(1);
  })
  it('Should remove a value with a right child', ()=>{
    const tree = new BinaryTree();
    tree.insert(5).insert(3).insert(1).insert(2)
      .insert(8)
      .insert(6)
      .insert(9)
      .insert(10)
    tree.remove(9);
    expect(tree.find(9)).toEqual(undefined);
    expect(tree.root.right.right.val).toEqual(10);
  })
  it('Should remove a value with two children', ()=>{
    const tree = new BinaryTree();
    tree.insert(5).insert(3).insert(1).insert(2)
      .insert(8)
      .insert(6)
      .insert(9);
    tree.remove(8);
    expect(tree.find(8)).toEqual(undefined);
    expect(tree.root.right.val).toEqual(9);
  })
  it('Should replace the root node with the smallest value on the right side', ()=>{
    const tree = new BinaryTree();
    tree.insert(5).insert(3).insert(1).insert(2)
      .insert(8)
      .insert(6)
      .insert(9);
    tree.remove(5);
    expect(tree.find(5)).toEqual(undefined);
    expect(tree.root.val).toEqual(6);
  })
  it('Should continue removing values until there is nothing to remove', ()=>{
    const tree = new BinaryTree();
    tree.insert(5).insert(3).insert(1).insert(2)
      .insert(8)
      .insert(6)
      .insert(9)
      .remove(5)
      .remove(6)
      .remove(3)
      .remove(2)
      .remove(1)
      .remove(8)
      .remove(9);
    expect(tree.root).toBeNull();
    // Covering edge case
    tree.insert(3).insert(2).insert(1).insert(5).insert(4).remove(5).remove(4).remove(2).remove(3).remove(1);
    expect(tree.root).toBeNull();
  })
  it('Should traverse nodes in the right order for Breadth-First Search', () => {
    const tree = new BinaryTree();
    tree.insert(5).insert(3).insert(1).insert(2)
      .insert(8)
      .insert(6)
      .insert(10)
      .insert(11);
    expect(tree.breadthFirstSearch()).toEqual([5, 3, 8, 1, 6, 10, 2, 11]);
  });
  it('Should traverse nodes in the right order for pre-order Depth-First Search', () => {
    const tree = new BinaryTree();
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
    const tree = new BinaryTree();
    tree.insert(10).insert(6).insert(15).insert(3)
      .insert(8)
      .insert(20);
    expect(tree.depthFirstSearchPostOrder()).toEqual([3, 8, 6, 20, 15, 10]);
  });
  it('Should traverse nodes in the right order for in-order Depth-First Search', () => {
    const tree = new BinaryTree();
    tree.insert(10).insert(6).insert(15).insert(3)
      .insert(8)
      .insert(20);
    expect(tree.depthFirstSearchInOrder()).toEqual([3, 6, 8, 10, 15, 20]);
  });
});
