export function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let selected = i;
    for (let j = i; j > 0; j--) {
      if (arr[selected] < arr[j - 1]) {
        [arr[selected], arr[j - 1]] = [arr[j - 1], arr[selected]];
        selected--;
      }
    }
  }
  return arr;
}
