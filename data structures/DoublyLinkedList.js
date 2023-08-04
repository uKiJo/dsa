class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return newNode;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let removedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode;
    }
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null;
    }
    this.length--;
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
      oldHead.prev = this.head;
    }
    return this;
  }

  get(i) {
    if (i < 0 || i >= this.length) {
      return null;
    }
    let middle = Math.floor(this.length / 2);
    let element;

    if (i > middle) {
      let counter = this.length - 1;
      element = this.tail;
      while (counter !== i) {
        element = element.prev;
        counter--;
      }
    } else {
      let counter = 0;
      element = this.head;
      while (counter !== i) {
        element = element.next;
        counter++;
      }
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
    if (i < 0 || i >= this.length) {
      return null;
    }

    if (i === 0) return this.unshift(val);
    if (i === this.length) return this.push(val);

    let newNode = new Node(val);
    let previousElement = this.get(i - 1);
    newNode.next = previousElement.next;
    previousElement.next.prev = newNode;
    previousElement.next = newNode;
    newNode.prev = previousElement;

    this.length++;
  }

  removeAt(i) {
    if (i < 0 || i >= this.length) {
      return null;
    }
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();

    let removed = this.get(i);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.next = null;
    removed.prev = null;

    this.length--;
  }
}
