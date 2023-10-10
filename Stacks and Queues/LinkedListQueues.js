class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stacks {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const NewNode = new Node(val);

    if (!this.first) {
      this.first = NewNode;
      this.last = NewNode;
    } else {
      this.last.next = NewNode;
      this.last = NewNode;
    }

    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let tempnode = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = tempnode.next;
    this.size--;

    return tempnode.value;
  }
}

const stack1 = new Stacks();

stack1.push("First");
stack1.push("Second");
stack1.push("Third");

console.log(stack1);

console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());

console.log(stack1);
