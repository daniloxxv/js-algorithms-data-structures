/**
 * Swaps elements of an array in place
 * @param {Array} arr The array containing the items
 * @param {Number} indexA The index of the first element
 * @param {Number} indexB The index of the second element
 */
function swap(arr, indexA, indexB) {
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}

module.exports = swap;
