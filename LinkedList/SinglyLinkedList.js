class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    let current = this.head;
    let newtail = current;

    if (!current) return undefined;

    while (current.next) {
      newtail = current;
      current = current.next;
    }
    this.tail = newtail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    const current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (this.length <= index || index < 0) return null;
    let count = 0;
    let current = this.head;
    while (count != index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (this.length <= index || index < 0) return false;
    if (index === this.length - 1) {
      this.pop(index);
      return true;
    }
    if (index === 0) return !!this.shift(index);
    const prevNode = this.get(index - 1);
    const rmNode = prevNode.next;
    const nextNode = rmNode.next;
    prevNode.next = nextNode;
    this.length--;
    return true;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    while (node !== null) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

let list = new SinglyLinkedList();
list.push(45);
list.push(15);
list.push(110);
list.push(12);
list.push(38);

console.log(list);
// list.traverse();
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift(10));
// console.log(list.get(1));
// console.log(list.set(1, 254));
list.insert(1, 4587);
// console.log(list.remove(1));

console.log(list.reverse());
