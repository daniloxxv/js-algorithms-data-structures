function selectionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let rightIndex = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[j] < arr[rightIndex]) rightIndex = j;
    }
    const temp = arr[rightIndex];
    arr[rightIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

module.exports = selectionSort;
