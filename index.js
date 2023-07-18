import { SinglyLinkedList } from "./data structures/SinglyLinkedList";

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(3);
list.push(3);

console.log(list.get(7));
console.log(list.length);
