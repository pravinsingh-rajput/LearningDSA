const arr = [10, 8, 36, 18, 22, 6];

const selectionSort = (arr) => {
  const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let lowestVal = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr, arr[i], arr[j]);
      x;
      if (arr[j] < arr[lowestVal]) {
        lowestVal = j;
      }
    }
    if (i !== lowestVal) swap(arr, i, lowestVal);
  }
  return arr;
};

console.log(selectionSort(arr));
