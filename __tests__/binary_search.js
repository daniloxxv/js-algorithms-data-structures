const expect = require('expect');
const binarySearch = require('../search_algorithms/binary_search');

describe('Binary search', () => {
  it('Finds an index in a sorted array', () => {
    const sortedArray = Array.from({ length: 1000 }, (_, num) => num);
    const numberToFind = Math.floor(Math.random() * 1000);
    expect(binarySearch(sortedArray, numberToFind)).toEqual(sortedArray.indexOf(numberToFind));
  });
  it('Returns -1 if the value is not present in the array', () => {
    expect(binarySearch([1, 2, 3], 4)).toEqual(-1);
  });
});
