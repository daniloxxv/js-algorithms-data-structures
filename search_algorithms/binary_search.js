/**
 * A binary search algorithm to find the index of an element in a sorted array
 * @param {Array} arr A sorted array of integers
 * @param {Number} value The integer to find
 */
function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === value) return middle;
    if (arr[middle] < value) {
      left = middle + 1;
    }
    if (arr[middle] > value) {
      right = middle - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
