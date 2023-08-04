import { DoublyLinkedList } from "./data structures/DoublyLinkedList";
import { SinglyLinkedList } from "./data structures/SinglyLinkedList";

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

list.removeAt(3);

console.log(list);
// console.log(list.print());
