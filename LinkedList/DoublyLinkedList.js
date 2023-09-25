class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let NewNode = new Node(val);
    if (!this.head) {
      this.head = NewNode;
      this.tail = NewNode;
    } else {
      this.tail.next = NewNode;
      NewNode.prev = this.tail;
      this.tail = NewNode;
      NewNode.next = null;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;

    let oldTail = this.tail;
    let newTail = oldTail.prev;
    oldTail.prev = null;
    this.tail = newTail;
    newTail.next = null;
    this.length--;

    return oldTail;
  }
  shift() {
    if (!this.head) return undefined;

    let oldHead = this.head;
    let newHead = oldHead.next;
    oldHead.next = null;
    this.head = newHead;
    newHead.prev = null;
    this.length--;

    return oldHead;
  }
  unshift(val) {
    let NewNode = new Node(val);
    if (!this.head) {
      this.head = NewNode;
      this.tail = NewNode;
    } else {
      this.head.prev = NewNode;
      NewNode.next = this.head;
      this.head = NewNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode, count;

    if (index <= this.length / 2) {
      currentNode = this.head;
      count = 0;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
    } else {
      currentNode = this.tail;
      count = this.length - 1;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
    }
    return currentNode;
  }
  set(index, value) {
    const found = this.get(index);
    if (found !== null) {
      found.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index > this.length || index < 0) return false;

    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }

    const NewNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = NewNode;
    nextNode.prev = NewNode;
    NewNode.next = nextNode;
    NewNode.prev = prevNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index > this.length - 1 || index < 0) return false;

    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    let removenode = this.get(index);
    let prevNode = removenode.prev;
    let nextNode = removenode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removenode.next = null;
    removenode.prev = null;

    this.length--;
    return removenode;
  }
}

const list = new DoublyLinkedList();
list.push(45);
list.push(10);
list.push(108);
list.push(88);
list.push(21);

console.log(list);
// console.log(list.pop());
// console.log(list.shift());
// list.unshift(64);
// console.log(list.get(-1));
// console.log(list.set(1, 8458));
// console.log(list.insert(1, 8458));
console.log(list.remove(4));
console.log(list);
