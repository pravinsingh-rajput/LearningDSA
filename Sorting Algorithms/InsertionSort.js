const arr = [10, 5, 12, 2, 0];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let sortedIndex = i - 1;

    while (sortedIndex >= 0 && arr[sortedIndex] > currentElement) {
      arr[sortedIndex + 1] = arr[sortedIndex];
      sortedIndex--;
    }
    arr[sortedIndex + 1] = currentElement;
  }
  return arr;
};

console.log(insertionSort(arr));
