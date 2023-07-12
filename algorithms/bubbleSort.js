export function bubbleSort(arr) {
  let isSwaped;
  for (let i = 0; i < arr.length; i++) {
    isSwaped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwaped = true;
      }
    }
    if (!isSwaped) break;
  }

  return arr;
}
