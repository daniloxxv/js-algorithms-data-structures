const swap = require('../helpers/swap');

/**
 * Sorts an array in place with bubble sort
 * @param {Array} arr An array
 * @returns Array The sorted array
 */
function bubbleSort(arr) {
  // Variables to keep track of the highest value in the array and its index
  let highestValue;
  let highestNumberIndex;

  // Outer loop to keep track of the index of the last unsorted element
  for (let end = arr.length - 1; end > 0; end -= 1) {
    // Resetting highest value to the lowest possible value after each loop
    highestValue = -Infinity;
    // Iterating over the unsorted part of the array
    for (let i = 0; i <= end; i += 1) {
      // Updating the highest value and keeping track of its index
      if (arr[i] > highestValue) {
        highestValue = arr[i];
        highestNumberIndex = i;
      }
    }
    // Swapping the element with the highest value with the last element in the array
    swap(arr, end, highestNumberIndex);
  }
  return arr;
}

module.exports = bubbleSort;
