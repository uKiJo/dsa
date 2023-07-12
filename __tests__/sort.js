import { it, expect, describe } from "vitest";
import { mergeSort } from "../algorithms/mergeSort";
import { bubbleSort } from "../algorithms/bubbleSort";
import { selectionSort } from "../algorithms/selectionSort";
import { insertionSort } from "../algorithms/insertionSort";
import { quickSort, pivot } from "../algorithms/quickSort";
import { getDigit, radixSort } from "../algorithms/radixSort";

describe("sorting algorithms", () => {
  const arr2 = [2, 1, 9, 76, 4];
  it("should mergeSort", () => {
    const arr = [1, 5, 2, 3, 8, 6];
    const sortedArray = mergeSort(arr2);
    // expect(sortedArray).toEqual([1, 2, 3, 5, 6, 8]);
    expect(sortedArray).toEqual([1, 2, 4, 9, 76]);
  });

  it("should bubbleSort", () => {
    const arr = [1, 5, 3, 2, 8, 6];
    const sortedArray = bubbleSort(arr);
    expect(sortedArray).toEqual([1, 2, 3, 5, 6, 8]);
  });

  it("should selectionSort", () => {
    const arr = [1, 5, 3, 2, 8, 6];
    const sortedArray = selectionSort(arr);
    expect(sortedArray).toEqual([1, 2, 3, 5, 6, 8]);
  });

  it("should insertionSort", () => {
    const arr = [1, 5, 3, 2, 8, 6];
    const arr2 = [45, 72, 13, 87, 2, 99, 58, 36, 5, 24];
    const sortedArray = insertionSort(arr2);
    expect(sortedArray).toEqual([2, 5, 13, 24, 36, 45, 58, 72, 87, 99]);
  });

  it("should pivot", () => {
    const arr = [4, 8, 2, 1, 5, 7, 6, 3];
    const k = pivot(arr);
    expect(k).toEqual(3);
  });

  it("should quickSort", () => {
    const arr = [4, 8, 2, 1, 5, 7, 6, 3];
    const result = quickSort(arr);
    const arr2 = [45, 72, 13, 87, 2, 99, 58, 36, 5, 24];
    const sortedArray = quickSort(arr2);
    expect(sortedArray).toEqual([2, 5, 13, 24, 36, 45, 58, 72, 87, 99]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should get digit", () => {
    let digit = 1237;
    let num = 5;
    expect(getDigit(digit, 0)).toEqual(7);
    expect(getDigit(digit, 1)).toEqual(3);
    expect(getDigit(digit, 2)).toEqual(2);
    expect(getDigit(digit, 3)).toEqual(1);
    expect(getDigit(num, 3)).toEqual(0);
  });

  it("should radixSort", () => {
    let arr = [5, 23, 3, 294, 100];
    expect(radixSort(arr, 0)).toEqual([3, 5, 23, 100, 294]);
  });
});

// 420048956
// ecDEXEy9
