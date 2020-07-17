function bubbleSort(arr){
  for (let j = arr.length-1; j > 0; j--){
    let highest = -Infinity, highIndex = -1
    for (let i = 0; i <= j; i++){
      if (arr[i] > highest) {
        highest = arr[i]
        highIndex = i
      }
    }
    let temp = arr[j]
    arr[j] = highest
    arr[highIndex] = temp
  }
  return arr
}

module.exports = bubbleSort;
