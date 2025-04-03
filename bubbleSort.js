var bubbleSort = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};

console.log(bubbleSort([5, 1, 4, 2, 8]));
console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([1, 2, 3, 4, 5]));
