const swap = require('../helpers/swap');

/**
 * Sorts an array in place with selection sort
 * @param {Array} arr The array to sort
 * @returns {Array} The sorted array
 */
function selectionSort(arr) {
  // Outer loop to iterate over elements of an array in order
  for (let i = 0; i < arr.length; i += 1) {
    let lowestElementIndex = i;
    // Iterates over the unsorted part of the array to keep track of the lowest element
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[lowestElementIndex]) lowestElementIndex = j;
    }
    // Swaps the lowest element with the first unsorted element
    swap(arr, lowestElementIndex, i);
  }
  return arr;
}

module.exports = selectionSort;
