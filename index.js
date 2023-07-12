import { mergeSort } from "./algorithms/mergeSort";
import { quickSort } from "./algorithms/quickSort";
import { radixSort } from "./algorithms/radixSort";

const sortedArray = radixSort([1, 5, 22, 32, 36, 28, 3025, 596, 8, 6], 0);

console.log(sortedArray);
