/**
 * Swaps elements of an array in place
 * @param {Array} arr The array containing the items
 * @param {Number} indexA The index of the first element
 * @param {Number} indexB The index of the second element
 */
function swap(arr, indexA, indexB){
    const temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

/**
 * Repositions a pivot inside an array and returns its index
 * @param {Array} arr An array to sort 
 * @param {Number} start The start index of the portion to sort
 * @param {Number} end The end index of the portion to sort
 * @return {Number} The index of the array in the sorted array
 */
function pivot(arr, start=0, end = arr.length){
    const pivotValue = arr[start];
    let pivotIndex = start;
    for (let i = start + 1; i < end; i++){
        if (pivotValue > arr[i]){
            pivotIndex++;
            // Swap to ensure all elements smaller than the pivot end up on the left side
            swap(arr, pivotIndex, i);
        }
    }
    // Final swap to ensure the pivot ends up in the correct position
    swap(arr, start, pivotIndex);
    return pivotIndex;
}

/**
 * Recursive quicksort function
 * @param {Array} arr The array
 * @param {Number} start The starting index for the portion to sort
 * @param {Number} end The end index for the portion to sort
 */
function quickSort(arr, start = 0, end = arr.length){
    if (start < end){
        const pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex);
        quickSort(arr, pivotIndex+1, end);
    }
    return arr;
} 

module.exports = quickSort;