import { it, expect, describe, beforeEach, afterEach } from "vitest";
import { SinglyLinkedList } from "../data structures/SinglyLinkedList";
describe("linked list", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(3);
    list.push(3);
  });

  it("should get an element from the list given an index", () => {
    expect(list.get(0).val).toEqual(1);
    expect(list.get(1).val).toEqual(2);
    expect(list.get(2).val).toEqual(3);
    expect(list.get(5)).toEqual(null);
  });

  it("should return the correct length of the list", () => {
    expect(list.length).toEqual(5);
  });

  it("should set a the value of the node at the given index", () => {
    expect(list.set(2, 2).val).toBeTruthy;
    expect(list.set(4, 100).val).toBeFalsy;
  });

  it("should insert an element at a specific index", () => {
    list.insertAt(2, 5);
    expect(list.get(2).val).toEqual(5);
    expect(list.length).toEqual(6);
  });

  it("should remove an element at a specific index", () => {
    list.removeAt(1);
    expect(list.length).toEqual(4);
    expect(list.get(1).val).toEqual(3);
  });

  it("should reverse the list", () => {
    list.reverse();
    expect(list.print()).toEqual([3, 3, 3, 2, 1]);
  });
});
