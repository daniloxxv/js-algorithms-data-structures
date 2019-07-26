function mergeSort(arr) {
    if (arr.length < 2) return arr
    let mid = Math.floor(arr.length/2)
    let head = arr.slice(0,mid)
    let tail = arr.slice(mid)
    return merge(mergeSort(head),mergeSort(tail))
  }
  
  function merge(head, tail) {
    let merged = [], i = 0, j = 0
    while (i < head.length && j < tail.length) {
      merged.push(head[i] < tail[j] ? head[i++] : tail[j++])
    }
    return [...merged,...head.slice(i),...tail.slice(j)]
  }