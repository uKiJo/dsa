import { it, expect, describe, beforeEach, afterEach } from "vitest";
import { DoublyLinkedList } from "../data structures/DoublyLinkedList";

describe("linked list", () => {
  let list;
  beforeEach(() => {
    list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
  });

  it("create an element at the end of the list", () => {
    expect(list.tail.val).toEqual(2);
    expect(list.length).toEqual(2);
    expect(list.tail.prev.val).toEqual(1);
  });

  it("remove the last element of the list", () => {
    list.pop();
    expect(list.tail.val).toEqual(1);
    expect(list.length).toEqual(1);
  });

  it("remove the first element of the list", () => {
    list.shift();
    list.shift();
    expect(list.tail).toEqual(null);
    expect(list.length).toEqual(0);
  });
});
