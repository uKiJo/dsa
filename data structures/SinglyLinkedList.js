class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const value = new Node(val);
    if (!this.head) {
      this.head = value;
      this.tail = value;
    } else {
      this.tail.next = value;
      this.tail = value;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    const value = new Node(val);
    if (!this.head) {
      this.head = value;
      this.tail = value;
    } else {
      const currentHead = this.head;
      this.head = value;
      this.head.next = currentHead;
    }
    this.length++;
    return this.head;
  }

  get(i) {
    if (i < 0 || i >= this.length) {
      return null;
    }
    let counter = 0;
    let element = this.head;
    while (counter !== i) {
      element = element.next;
      counter++;
    }

    return element;
  }

  set(i) {
    if (i < 0 || i >= this.length) {
      return null;
    }
    let counter = 0;
    let element = this.head;
    
  }
}
