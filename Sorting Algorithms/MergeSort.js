const arr = [15, 1, 12, 0, 23, 5, 71, 23, 56, 11, 20];

const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let midpoint = Math.floor(arr.length / 2);
  let leftarr = mergeSort(arr.slice(0, midpoint));
  let rightarr = mergeSort(arr.slice(midpoint));
  return merge(leftarr, rightarr);
};

console.log(mergeSort(arr));
