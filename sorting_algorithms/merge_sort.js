/**
 * Helper function to merge two sorted arrays
 * @param {Array} arr1 The first sorted array
 * @param {Array} arr2 The second sorted array
 * @returns {Array} The merged array
 */
function merge(arr1, arr2) {
  const merged = [];
  let arr1Index = 0;
  let arr2Index = 0;

  /* While loop to compare the elements of the two arrays
  * and push them into a merged array in the right order until the end of one of them is reached.
  * When the end of one array is reached and the other still has elements,
  * that means all of its elements are greater than the ones in the merged array */
  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      merged.push(arr1[arr1Index]);
      arr1Index += 1;
    } else {
      merged.push(arr2[arr2Index]);
      arr2Index += 1;
    }
  }
  // Returns the merged array, plus the unvisited elements of the remaining array
  return [...merged, ...arr1.slice(arr1Index), ...arr2.slice(arr2Index)];
}

/**
 * Recursive merge sort function. Does not mutate the input array
 * @param {Array} arr The array to sort
 * @returns {Array} A sorted array
 */
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const head = arr.slice(0, mid);
  const tail = arr.slice(mid);
  return merge(mergeSort(head), mergeSort(tail));
}

module.exports = mergeSort;
