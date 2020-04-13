function insertionSort(arr){
  for (let i = 0, j = 1; j < arr.length; j++, i = j - 1){
    const key = arr[j];
    while (i >= 0 && arr[i] > key){
      arr[i+1] = arr[i];
      i--;
    }
    arr[i+1] = key;
  }
}
