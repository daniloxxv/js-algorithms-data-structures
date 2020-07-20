/**
 * Sorts an array in place with insertion sort
 * @param {Array} arr The array to sort
 * @returns Array The sorted array
 */
function insertionSort(arr) {
  /* Creating a loop with two variables:
  * one to keep track of the end of the part of the array that is being sorted,
  * another to iterate over it */
  for (let i = 0, end = 1; end < arr.length; end += 1, i = end - 1) {
    const valueToSort = arr[end];
    while (i >= 0 && arr[i] > valueToSort) {
      // Swapping the unsorted element with the previous one until it finds a smaller value
      arr[i + 1] = arr[i];
      i -= 1;
    }
    // Placing the unsorted value correctly
    arr[i + 1] = valueToSort;
  }
  // Returning the sorted array
  return arr;
}

module.exports = insertionSort;
