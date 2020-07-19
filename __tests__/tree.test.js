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
});
