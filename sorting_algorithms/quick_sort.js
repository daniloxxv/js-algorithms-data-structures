const swap = require('../helpers/swap');

/**
 * Recursive quicksort function
 * @param {Array} arr The array
 * @param {Number} start The starting index for the portion to sort
 * @param {Number} end The end index for the portion to sort
 */
function quickSort(arr, start = 0, end = arr.length) {
  if (start < end) {
    const pivot = arr[start];
    let pivotIndex = start;
    for (let i = start + 1; i < end; i += 1) {
      if (pivot > arr[i]) {
        pivotIndex += 1;
        // Swap to ensure all elements smaller than the pivot end up on the left side
        swap(arr, pivotIndex, i);
      }
    }
    // Last swap to ensure all elements smaller than the pivot end up on the left side
    swap(arr, start, pivotIndex);
    // Recursively call quicksort on both sides
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

module.exports = quickSort;
