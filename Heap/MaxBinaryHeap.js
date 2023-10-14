class maxBinaryHeap {
  constructor() {
    this.values = [41, 33, 38, 18, 27, 12, 28];
  }
  insert(node) {
    this.values.push(node);
    this.bubbleup();
  }
  bubbleup() {
    let elementindx = this.values.length - 1;
    let element = this.values[elementindx];
    while (elementindx > 0) {
      let parentindx = Math.floor((elementindx - 1) / 2);
      let parent = this.values[parentindx];

      if (element <= parent) break;
      this.values[parentindx] = element;
      this.values[elementindx] = parent;
      elementindx = parentindx;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbledown();
    }
    return max;
  }

  bubbledown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndx = 2 * index + 1;
      let rightChildIndx = 2 * index + 2;
      let leftchild, rightchild;
      let swap = null;

      if (leftChildIndx < length) {
        leftchild = this.values[leftChildIndx];
        if (leftchild > element) {
          swap = leftChildIndx;
        }
      }
      if (rightChildIndx < length) {
        rightchild = this.values[rightChildIndx];
        if (
          (rightchild > leftchild && swap !== null) ||
          (rightchild > element && swap === null)
        ) {
          swap = rightChildIndx;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let maxheap = new maxBinaryHeap();
console.log(maxheap.values);

// maxheap.insert(85);
// maxheap.insert(55);
// maxheap.insert(16);
// maxheap.insert(2);
maxheap.extractMax();

console.log(maxheap.values);
