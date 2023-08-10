class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value > current.value) {
          if (current.right) current = current.right;
          else {
            current.right = newNode;
            return this;
          }
        } else if (value < current.value) {
          if (current.left) current = current.left;
          else {
            current.left = newNode;
            return this;
          }
        }
      }
    }
  }
}
