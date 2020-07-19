function compareLists(list1, list2) {
  if (list1.length !== list2.length) return false;
  let currentList1Element = list1.head;
  let currentList2Element = list2.head;
  while (currentList1Element && currentList2Element) {
    if (currentList1Element.val !== currentList2Element.val) return false;
    currentList1Element = currentList1Element.next;
    currentList2Element = currentList2Element.next;
  }
  return true;
}

module.exports = compareLists;
