const arr = [5, 1, 12, 2, 6, 8, 4];

const swap = (arr, ind1, ind2) => {
  [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
};

const pivot = (arr, start = 0, end = arr.length) => {
  const pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

console.log(quickSort(arr));
