const expect = require('expect');
const Stack = require('../data_structures/stack');

describe('Stack', () => {
  it('Should be "last in, first out"', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
  });
  it('Should return update the size property', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size).toEqual(3);
  });
  it('Should not allow a pop from an empty stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.pop();
    expect(stack.pop()).toBeUndefined();
    expect(stack.size).toEqual(0);
  });
});
