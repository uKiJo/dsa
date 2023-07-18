import { it, expect, describe } from "vitest";
import { SinglyLinkedList } from "../data structures/SinglyLinkedList";
describe("linked list", () => {
  const list = new SinglyLinkedList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(3);
  list.push(3);

  it("should get an element from the list given an index", () => {
    expect(list.get(0).val).toEqual(1);
    expect(list.get(1).val).toEqual(2);
    expect(list.get(2).val).toEqual(3);
    expect(list.get(5)).toEqual(null);
  });

  it("should return the correct length of the list", () => {
    expect(list.length).toEqual(5);
  });
});
