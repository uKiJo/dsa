import { it, describe, beforeEach, expect } from "vitest";
import { Stack } from "../data structures/Stack";

describe("Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("should add an element to an empty list", () => {
    stack.push(2);
    expect(stack.first.value).toEqual(2);
    expect(stack.last.value).toEqual(2);
    expect(stack.size).toEqual(1);
  });

  it("should add an element to a non-empty list", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.first.value).toEqual(2);
    expect(stack.last.value).toEqual(1);
    expect(stack.size).toEqual(2);
  });

  it("should remove the last element from the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.last.value).toEqual(1);
    expect(stack.first.value).toEqual(1);
  });

  it("should remove from an empty stack", () => {
    stack.pop();
    expect(stack.first).toBeFalsy();
    expect(stack.last).toBeFalsy();
  });
});
