function bubbleSort(arr) {
  for (let j = arr.length - 1; j > 0; j -= 1) {
    let highest = -Infinity; let
      highIndex = -1;
    for (let i = 0; i <= j; i += 1) {
      if (arr[i] > highest) {
        highest = arr[i];
        highIndex = i;
      }
    }
    const temp = arr[j];
    arr[j] = highest;
    arr[highIndex] = temp;
  }
  return arr;
}

module.exports = bubbleSort;
