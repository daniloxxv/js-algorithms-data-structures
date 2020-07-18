const expect = require('expect');
const bubbleSort = require('../sorting-algorithms/bubble_sort');
const mergeSort = require('../sorting-algorithms/merge_sort');
const selectionSort = require('../sorting-algorithms/selection_sort');
const insertionSort = require('../sorting-algorithms/insertion-sort');
const quickSort = require('../sorting-algorithms/quick_sort');
const radixSort = require('../sorting-algorithms/radix_sort');

describe('Sorting algorithms', () => {
  const algorithms = {
    bubbleSort,
    mergeSort,
    selectionSort,
    insertionSort,
    quickSort,
    radixSort,
  };

  Object.keys(algorithms).forEach((key) => {
    it(`Sorts a simple array with ${key}`, () => {
      expect(algorithms[key]([3, 2, 1])).toEqual([1, 2, 3]);
    });
    it(`Handles an empty array with ${key}`, () => {
      expect(algorithms[key]([])).toEqual([]);
    });
    it(`Handles a previously sorted array with ${key}`, () => {
      const sortedArray = Array.from({ length: 5000 }, (_, i) => i);
      expect(algorithms[key](sortedArray)).toEqual([...sortedArray].sort((a, b) => a - b));
    });
    it(`Sorts a random array with ${key}`, () => {
      const randomArray = Array.from({ length: 5000 }, () => Math.floor(Math.random() * 5000));
      expect(algorithms[key]([...randomArray])).toEqual([...randomArray].sort((a, b) => a - b));
    });
  });
});
