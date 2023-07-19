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

  set(i, value) {
    let element = this.get(i);
    if (element) {
      element.val = value;
      return true;
    }

    return false;
  }

  insertAt(i, val) {
    if (i < 0 || i > this.length) {
      return null;
    }

    if (i === this.length) return this.push(val);
    if (i === 0) return this.unshift(val);

    let newNode = new Node(val);
    let previousElement = this.get(i - 1);
    newNode.next = previousElement.next;
    previousElement.next = newNode;
    //OR ===>
    // let currentElement = this.get(i);
    // previousElement.next = newNode;
    // newNode.next = currentElement;
    this.length++;
  }

  removeAt(i) {
    if (i < 0 || i >= this.length) {
      return null;
    }
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();

    // let element = this.get(i);
    let previousElement = this.get(i - 1);
    let removed = previousElement.next;
    previousElement.next = removed.next;
    this.length--;
  }

  reverse() {
    let prevNode = null;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    for (let index = 0; index < this.length; index++) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
  }

  print() {
    let arr = [];
    let current = this.head;
    for (let index = 0; index < this.length; index++) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}
