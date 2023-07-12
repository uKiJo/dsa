export function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j + 1]) {
        min = j + 1;
      }
    }
    if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}
