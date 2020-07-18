/**
 * Gets the digit value of an integer at a place
 * @param {Number} number The number
 * @param {Number} place The place (counting from the right, starting with zero)
 */
function getDigit(number, place) {
  return Math.floor(Math.abs(number) / 10 ** place) % 10;
}

/**
 * Counts the number of digits in a number
 * @param {Number} number The number
 */
function digitCount(number) {
  return number === 0 ? 1 : Math.floor(Math.log10(Math.abs(number))) + 1;
}

/**
 * Gets the max digit count of all numbers in an array of integers
 * @param {Array} arr An array of integers
 */
function getMaxDigitCount(arr) {
  return arr.reduce((max, currentElement) => Math.max(digitCount(currentElement), max), 0);
}

/**
 * Uses radix sort to sort an array recursively
 * @param {Array} arr An array of integers
 * @param {Number} digit The digit place being sorted (counting from the right, starting with zero)
 */
function radixSort(arr) {
  const maxDigitCount = getMaxDigitCount(arr);
  for (let digit = 0; digit < maxDigitCount; digit += 1) {
    const buckets = Array.from({ length: 10 }, () => []);
    arr.forEach((number) => {
      const digitValue = getDigit(number, digit);
      buckets[digitValue].push(number);
    });
    arr = [].concat(...buckets);
  }
  return arr;
}

module.exports = radixSort;
