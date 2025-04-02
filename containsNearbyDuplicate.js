/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let l = {};
  for (let i = 0; i < nums.length; i++) {
    const t = nums[i];
    if (l[t] !== undefined && Math.abs(l[t] - i) <= k) {
      return true;
    }
    l[t] = i;
  }
  return false;

};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));


