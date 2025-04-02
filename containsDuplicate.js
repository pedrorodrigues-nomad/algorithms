/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let l = {};

  for (let [i, item] of nums.entries()) {
    if (l[item] === undefined) {
      l[item] = [i, 1];
    } else {
      l[item][1] += 1;
    }
  }

  for (let [k, v] of Object.entries(l)) {
    if (v[1] >= 2) {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
