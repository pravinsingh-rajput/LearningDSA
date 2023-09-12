const arr = [];
for (let i = 1; i <= 20000; i++) {
  arr.push(i);
}

const linearSearch = (arr, search) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) return i;
  }
  return -1;
};

const SearchStart = performance.now();
const result = linearSearch(arr, 15821);
const SearchEnd = performance.now();

const SearchTime = SearchEnd - SearchStart;
console.log(`Execution Time: ${SearchTime} milliseconds`);

if (result !== -1) {
  console.log(`Found At index ${result}`);
} else {
  console.log(`Not found in Array`);
}
