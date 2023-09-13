const arr = [40, 15, 32, 16, 75, 11, 5, 41, 108, 10, 65, 42, 37, 91, 82, 61];

const bubbleSort = (arr) => {
  let swapping;

  const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
  };

  for (let i = arr.length; i > 0; i--) {
    swapping = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapping = false;
      }
    }
    if (swapping) break;
  }
  return arr;
};

console.log(bubbleSort(arr));
