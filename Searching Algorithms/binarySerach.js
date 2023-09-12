const arr = [];
for (let i = 1; i <= 20000; i++) {
  arr.push(i);
}

const binarySearch = (arr, search) => {
  let leftpointer = 0;
  let rightpointer = arr.length - 1;

  while (leftpointer <= rightpointer) {
    const midpoint = Math.floor((leftpointer + rightpointer) / 2);
    if (arr[midpoint] === search) {
      return midpoint;
    } else if (arr[midpoint] < search) {
      leftpointer = midpoint + 1;
    } else {
      rightpointer = midpoint - 1;
    }
  }
  return -1;
};

const SearchStart = performance.now();
const result = binarySearch(arr, 15821);
const SearchEnd = performance.now();

const SearchTime = SearchEnd - SearchStart;
console.log(`Execution Time: ${SearchTime} milliseconds`);

if (result !== -1) {
  console.log(`Found At index ${result}`);
} else {
  console.log(`Not found in Array`);
}
