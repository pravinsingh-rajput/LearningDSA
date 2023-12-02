class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}
class priorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNODE = new Node(val, priority);
    this.values.push(newNODE);
    this.bubbleup();
  }
  bubbleup() {
    let elementIndex = this.values.length - 1;
    let element = this.values[elementIndex];

    while (elementIndex > 0) {
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority <= parent.priority) break;

      this.values[parentIndex] = element;
      this.values[elementIndex] = parent;
      elementIndex = parentIndex;
    }
  }
  dequeue() {
    const max = this.values[0];
    const lastval = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = lastval;
      this.bubbledown();
    }
    return max;
  }

  bubbledown() {
    let elementindex = 0;
    const totallength = this.values.length;
    const element = this.values[elementindex];

    while (true) {
      let leftIndex = 2 * elementindex + 1;
      let rightIndex = 2 * elementindex + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIndex < totallength) {
        leftChild.priority = this.values[leftIndex];
        if (leftIndex.priority > element.priority) {
          swap = leftIndex;
        }
      }

      if (rightIndex < totallength) {
        rightChild.priority = this.values[rightIndex];
        if (
          (rightIndex.priority > element && swap === null) ||
          (swap !== null && leftChild.priority < rightChild.priority)
        ) {
          swap = rightIndex;
        }
      }

      if (swap === null) break;
      this.values[swap] = element;
      this.values[elementindex] = this.values[swap];
      elementindex = swap;
    }
  }
}

let Queue = new priorityQueue();

Queue.enqueue("BMW", 2);
Queue.enqueue("Fortuner", 3);
Queue.enqueue("Rolls Royce", 4);
Queue.enqueue("Tata", 1);

console.log(Queue);

Queue.dequeue();
console.log(Queue);
