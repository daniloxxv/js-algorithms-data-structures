function merge(head, tail) {
  const merged = []; let i = 0; let
    j = 0;
  while (i < head.length && j < tail.length) {
    if (head[i] < tail[j]) {
      merged.push(head[i]);
      i += 1;
    } else {
      merged.push(tail[j]);
      j += 1;
    }
  }
  return [...merged, ...head.slice(i), ...tail.slice(j)];
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const head = arr.slice(0, mid);
  const tail = arr.slice(mid);
  return merge(mergeSort(head), mergeSort(tail));
}

module.exports = mergeSort;
