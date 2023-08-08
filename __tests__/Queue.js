import { expect, describe, beforeEach, it } from "vitest";
import { Queue } from "../data structures/Queue";

describe("Queue", () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it("add to an empty queue", () => {
    queue.enqueue(1);
    expect(queue.first.value).toEqual(1);
    expect(queue.last.value).toEqual(1);
    expect(queue.size).toEqual(1);
  });

  it("add to a non empty queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.first.value).toEqual(1);
    expect(queue.last.value).toEqual(2);
    expect(queue.size).toEqual(2);
  });

  it("remove from the beginning of an empty queue", () => {
    queue.dequeue();
    expect(queue.first).toEqual(null);
    expect(queue.last).toEqual(null);
  });

  it("removes from the beginning of a queue of one element", () => {
    queue.enqueue(1);
    queue.dequeue();
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
  });

  it("remove from the beginning of a non empty queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.first.value).toEqual(2);
    expect(queue.last.value).toEqual(3);
    expect(queue.last.value).toEqual(3);
  });
});
