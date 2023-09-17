const arr = [154, 32548, 7516, 12, 320, 84657, 49];

const getDigit = (num, digit) => {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const getMaxDigit = (nums) => {
  let maxdigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxdigit = Math.max(maxdigit, digitCount(nums[i]));
  }
  return maxdigit;
};

const radixSort = (arr) => {
  const maxdigit = getMaxDigit(arr);

  for (let i = 0; i < maxdigit; i++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      digitBucket[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...digitBucket);
  }
  return arr;
};

console.log(radixSort(arr));
