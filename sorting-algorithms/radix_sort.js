/**
 * Gets the digit value of an integer at a place
 * @param {Number} number The number
 * @param {Number} place The place (counting from the right, starting with zero)
 */
function getDigit(number, place){
    return Math.floor(Math.abs(number) / 10**place) % 10;
}

/**
 * Counts the number of digits in a number
 * @param {Number} number The number
 */
function digitCount(number){
    return number === 0 ? 1 : Math.floor(Math.log10(Math.abs(number))) + 1;
}

/**
 * Gets the max digit count of all numbers in an array of integers
 * @param {Array} arr An array of integers
 */
function getMaxDigitCount(arr){
    return arr.reduce((currentMax,currentElement)=>Math.max(digitCount(currentElement), currentMax), 0);
}

/**
 * Uses radix sort to sort an array recursively
 * @param {Array} arr An array of integers
 * @param {Number} digit The digit current being sorted (counting from the right, starting with zero)
 */
function radixSort(arr, digit=0){
    const maxDigitCount = getMaxDigitCount(arr);
    const buckets = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];
    for (const number of arr){
        const digitValue = getDigit(number,digit);
        buckets[digitValue].push(number)
    }
    return digit === maxDigitCount ? arr : radixSort(buckets.reduce((a,b)=>[...a, ...b],[]), digit + 1)
}

module.exports = radixSort;