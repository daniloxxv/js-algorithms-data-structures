function generateListFromArray(arr, LinkedList) {
  const linkedList = new LinkedList();
  arr.forEach((el) => linkedList.push(el));
  return linkedList;
}

module.exports = generateListFromArray;
