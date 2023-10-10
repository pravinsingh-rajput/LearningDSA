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
      let tempnode = this.first;
      this.first = NewNode;
      this.first.next = tempnode;
    }

    return ++this.size;
  }
  pop() {
    if (!this.first) return null;

    let tempnode = this.first;
    this.first = tempnode.next;
    tempnode.next = null;
    this.size--;

    return tempnode.value;
  }
}

const Stack1 = new Stacks();

Stack1.push("First");
Stack1.push("Second");
Stack1.push("Third");
Stack1.push("Four");

console.log(Stack1);

console.log(Stack1.pop());

console.log(Stack1);
