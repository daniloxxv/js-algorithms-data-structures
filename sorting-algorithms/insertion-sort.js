function insertionSort(arr) {
  for (let i = 0, j = 1; j < arr.length; j += 1, i = j - 1) {
    const key = arr[j];
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1;
    }
    arr[i + 1] = key;
  }
  return arr;
}

module.exports = insertionSort;
