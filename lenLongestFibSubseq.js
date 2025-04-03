/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const set = new Set(arr);
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let a = arr[i];
      let b = arr[j];
      let len = 2;

      while (set.has(a + b)) {
        const temp = a + b;
        a = b;
        b = temp;
        len++;
      }

      max = Math.max(max, len);
    }
  }

  return max > 2 ? max : 0;
};

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(lenLongestFibSubseq([1, 3, 7, 11, 12, 14, 18]));
console.log(lenLongestFibSubseq([2, 4, 7, 8, 9, 10, 14, 15, 18, 23, 32, 50]));
