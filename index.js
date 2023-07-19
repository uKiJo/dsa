import { SinglyLinkedList } from "./data structures/SinglyLinkedList";

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(3);
list.push(3);
list.insertAt(2, 5);

console.log(list);
list.reverse();
console.log(list.print());
