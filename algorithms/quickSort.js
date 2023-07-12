export function pivot(arr) {
  let j = 1;
  let k = 0;

  while (j < arr.length) {
    if (arr[0] > arr[j]) {
      k++;
      [arr[k], arr[j]] = [arr[j], arr[k]];
    }
    j++;
  }

  [arr[k], arr[0]] = [arr[0], arr[k]];

  return k;
}

export function quickSort(arr) {
  if (arr.length < 2) return arr;
  const piv = pivot(arr);
  const left = quickSort(arr.slice(0, piv + 1));
  const right = quickSort(arr.slice(piv + 1));

  return [...left, ...right];
}
