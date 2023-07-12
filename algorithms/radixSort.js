export function getDigit(number, l) {
  return Math.floor((number % Math.pow(10, l + 1)) / Math.pow(10, l));
}

export function radixSort(arr, j) {
  debugger;
  let buckets = Array.from(Array(10), () => []);

  for (let i = 0; i < arr.length; i++) {
    buckets[getDigit(arr[i], j)].push(arr[i]);
  }

  if (buckets[0].length == arr.length) {
    return buckets.flat();
  }

  return radixSort(buckets.flat(), ++j);
}
