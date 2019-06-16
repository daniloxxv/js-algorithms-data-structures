function selectionSort(arr){
  for (let i = 0; i < arr.length; i++){
    let rightIndex = i
    for (let j = i +1; j < arr.length; j++){
      if (arr[j] < arr[rightIndex]) rightIndex = j
    }
    let temp = arr[rightIndex]
    arr[rightIndex] = arr[i]
    arr[i] = temp
  }
  return arr
}
