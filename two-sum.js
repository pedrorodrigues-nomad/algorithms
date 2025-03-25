var twoSum = function (nums, target) {
  var hasher = {};

  for (i = 0; i <= nums.length; i++) {
    if (hasher[nums[i]] !== undefined) {
      return [hasher[nums[i]], i];
    }

    hasher[target - nums[i]] = i;
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
